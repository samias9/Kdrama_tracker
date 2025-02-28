"""

import time
import random
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Configuration de Selenium WebDriver
chrome_options = Options()
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920x1080")
chrome_options.add_argument("--disable-blink-features=AutomationControlled")
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# URL de la page des dramas
BASE_URL = "https://mydramalist.com/shows/top"
driver.get(BASE_URL)

# Pause aléatoire pour imiter un comportement humain
time.sleep(random.uniform(3, 6))

# Attente du chargement de la page
try:
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "h6.text-primary a"))
    )
except:
    print("Erreur : les éléments n'ont pas été trouvés. La structure de la page a peut-être changé.")
    driver.quit()
    exit()

drama_data = []

# Trouver le nombre total de pages
pagination_links = driver.find_elements(By.CSS_SELECTOR, "a.page-link")
page_numbers = []

for link in pagination_links:
    href = link.get_attribute("href")
    if href and "?page=" in href:
        page_numbers.append(int(href.split("?page=")[1]))

total_pages = max(page_numbers) if page_numbers else 1
print(f"Nombre total de pages détectées : {total_pages}")

# Boucle pour scraper toutes les pages
for page in range(1, total_pages + 1):
    page_url = f"{BASE_URL}?page={page}"
    print(f"Scraping de la page {page}...")
    driver.get(page_url)

    # Attente du chargement de la page
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "h6.text-primary a"))
        )
    except:
        print(f"Page {page} ignorée, éléments non trouvés.")
        continue

    # Récupérer les détails des dramas
    drama_elements = driver.find_elements(By.CSS_SELECTOR, "div.box")
    for drama_elem in drama_elements:
        try:
            title_elem = drama_elem.find_element(By.CSS_SELECTOR, "h6.text-primary a")
            title = title_elem.text.strip()

            try:
                meta_elem = drama_elem.find_element(By.CSS_SELECTOR, "span.text-muted")
                year = meta_elem.text.split("-")[1].strip().split(",")[0]
            except:
                year = "Inconnu"

            try:
                rating_elem = drama_elem.find_element(By.CSS_SELECTOR, "span.p-l-xs.score")
                rating = rating_elem.text.strip()
            except:
                rating = "N/A"

            try:
                img_elem = drama_elem.find_element(By.CSS_SELECTOR, "img.img-responsive")
                img_url = img_elem.get_attribute("src")
            except:
                img_url = "Aucune image trouvée"

            drama_data.append({
                "title": title,
                "year": year,
                "rating": rating,
                "image": img_url
            })

        except Exception as e:
            print(f"Erreur lors de l'extraction des données : {e}")
            continue

    time.sleep(random.uniform(3, 6))  # Pause aléatoire pour éviter la détection

# Fermeture du navigateur
driver.quit()

# Sauvegarde des données
js_data = "const dramas = " + json.dumps(drama_data, indent=4) + ";"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_data)

print(f"{len(drama_data)} dramas scrapés et sauvegardés dans data.js")
"""
import time
import random
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Configuration de Selenium WebDriver
chrome_options = Options()
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920x1080")
chrome_options.add_argument("--disable-blink-features=AutomationControlled")
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# URL de la page des dramas
BASE_URL = "https://mydramalist.com/shows/top"
driver.get(BASE_URL)

# Pause aléatoire pour imiter un comportement humain
time.sleep(random.uniform(3, 6))

# Attente du chargement de la page
try:
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "h6.text-primary a"))
    )
except:
    print("Erreur : les éléments n'ont pas été trouvés. La structure de la page a peut-être changé.")
    driver.quit()
    exit()

drama_data = []

# Trouver le nombre total de pages
pagination_links = driver.find_elements(By.CSS_SELECTOR, "a.page-link")
page_numbers = [int(link.get_attribute("href").split("?page=")[1]) for link in pagination_links if link.get_attribute("href") and "?page=" in link.get_attribute("href")]

total_pages = max(page_numbers) if page_numbers else 1
print(f"Nombre total de pages détectées : {total_pages}")

# Boucle pour scraper toutes les pages
for page in range(1, total_pages + 1):
    page_url = f"{BASE_URL}?page={page}"
    print(f"Scraping de la page {page}...")
    driver.get(page_url)

    # Attente du chargement de la page
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "h6.text-primary a"))
        )
    except:
        print(f"Page {page} ignorée, éléments non trouvés.")
        continue

    # Attendre le chargement des images
    WebDriverWait(driver, 5).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "img.img-responsive"))
    )

    # Récupérer les détails des dramas
    drama_elements = driver.find_elements(By.CSS_SELECTOR, "div.box")
    for drama_elem in drama_elements:
        try:
            title_elem = drama_elem.find_element(By.CSS_SELECTOR, "h6.text-primary a")
            title = title_elem.text.strip()

            try:
                meta_elem = drama_elem.find_element(By.CSS_SELECTOR, "span.text-muted")
                year = meta_elem.text.split("-")[1].strip().split(",")[0]
            except:
                year = "Inconnu"

            try:
                rating_elem = drama_elem.find_element(By.CSS_SELECTOR, "span.p-l-xs.score")
                rating = rating_elem.text.strip()
            except:
                rating = "N/A"

            # Récupération de l'image (gestion du lazy loading)
            try:
                img_elem = drama_elem.find_element(By.CSS_SELECTOR, "img.img-responsive")
                img_url = img_elem.get_attribute("src")  # Vérifier si l'image est chargée normalement
                if "blank" in img_url or not img_url:
                    img_url = img_elem.get_attribute("data-src")  # Essayer de récupérer via data-src
            except:
                img_url = "Aucune image trouvée"

            drama_data.append({
                "title": title,
                "year": year,
                "rating": rating,
                "image": img_url
            })

        except Exception as e:
            print(f"Erreur lors de l'extraction des données : {e}")
            continue

    time.sleep(random.uniform(3, 6))  # Pause aléatoire pour éviter la détection

# Fermeture du navigateur
driver.quit()

# Sauvegarde des données
js_data = "const dramas = " + json.dumps(drama_data, indent=4) + ";"
with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_data)

print(f"{len(drama_data)} dramas scrapés et sauvegardés dans data.js")
