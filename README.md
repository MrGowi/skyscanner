Installationsprogramme:
	•Visual Studio Code
	•Android Studio
	•Node
	•Git
	•Chrome

Android Studio
1.Standard-Installation durchführen

2.Umgebungs-Variablen setzen:

	JAVA_HOME: C:\Program Files\Android\Android Studio\jbr

	ANDROID_HOME: C:\Users\{username}\AppData\Local\Android\Sdk

Node
Installation mit Standardeinstellungen

Test auf Konsole (Powershell oder CMD):
	node

Git
Installation mit Standardeintellungen

Test auf Konsole:
	git --version

Installation Ionic:
	npm i -g @ionic/cli

Capacitor Installation:
	Geolocation:
		npm install @capacitor/geolocation
		npx cap sync
	Kamera:
		npm install @capacitor/camera
		npx cap sync
	Capacitor Device:
		npm install @capacitor/device
		npx cap sync
	Splashscreen:
		npm install @capacitor/assets --save-dev
		ionic cap sync
		npx capacitor-assets generate

Projekt im Browser starten:
	ionic serve
