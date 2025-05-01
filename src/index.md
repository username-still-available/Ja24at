---
layout: base.njk
title: Home
---

<!-- About Section - Moved here and redesigned -->
<section id="about" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
        <!-- Image centered and made more prominent -->
        <div class="flex flex-col items-center">
            <!-- Image Container - Larger and centered -->
            <div class="w-full max-w-2xl mb-12">
                <div class="rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
                    {% picture "/assets/images/original/stock/this-is-my-dream-job-2025-04-06-11-09-40-utc.jpg", "Sozialarbeit als Berufung - Zuzana Jancova", "100vw", "w-full h-full object-cover" %}
                </div>
            </div>

            <!-- Heading now below image -->
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">Meine Geschichte</h2>

            <!-- About Text - Now below heading -->
            <div class="w-full max-w-3xl text-center md:text-left">
                <p class="text-gray-700 mb-6">
                    Nach meinem abgeschlossenen Magisterstudium der Sozialen Arbeit an der Universität Bratislava in der Slowakei und einem zweijährigen Aufenthalt in den USA, wo ich ein Praktikum absolvierte, begann meine "Reise" in Österreich als Putzfrau in einem Hotel im ersten Bezirk in Wien. Nach dem Erlernen der deutschen Sprache und dem Bestehen der rechtlichen Prüfung zur Anerkennung meiner Ausbildung für Sozialarbeit gemäß § 7 des WKJHG, die ich erfolgreich beim Magistrat 11 der Stadt Wien ablegte, qualifizierte ich mich als Sozialarbeiterin in Österreich.
                </p>
                <div class="border-l-4 border-brand-green pl-10 py-4 my-8">
                    <p class="text-gray-700 italic font-medium text-lg font-heading">
                        "Glück ist das einzige, was sich verdoppelt, wenn man es teilt."<br>
                        <span class="text-sm mt-2 block">- Albert Schweitzer</span>
                    </p>
                </div>
                <p class="text-gray-700 italic">
                    Als Sozialarbeiterin sehe ich es als meine Berufung, Menschen in nicht einfachen Lebenssituationen zur Seite zu stehen. Mein Ziel ist es, diesen nicht nur Unterstützung anzubieten, sondern ihnen auch Zuversicht und Freude zu schenken, um ein Lächeln auf ihre Gesichter zu bringen.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="py-16 bg-brand-green">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-white mb-12 font-heading">Meine Leistungen</h2>

        <!-- Use Grid for equal columns, increased gap -->
        <div class="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6">
            <!-- Service 1: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Kinderbetreuung</h3>
                    <p class="text-gray-600 mb-6 flex-grow">Ich unterstütze Sie in Ihrem Alltag, sodass Sie sich auf Ihre wichtigen geschäftlichen Termine konzentrieren können, ohne sich Sorgen um Ihre Kinder machen zu müssen.</p>
                    <a href="/#service-kinderbetreuung" class="text-brand-green hover:text-brand-green-light font-medium transition-colors mt-auto">
                        Mehr erfahren →
                    </a>
                </div>
            </div>
            <!-- Service 2: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Gesellschaftliche Begleitung</h3>
                    <p class="text-gray-600 mb-6 flex-grow">Ich unterstütze Sie gern, falls Sie für Ihren wichtigen Termin eine Begleitperson brauchen.</p>
                    <a href="/#service-begleitung" class="text-brand-green hover:text-brand-green-light font-medium transition-colors mt-auto">
                        Mehr erfahren →
                    </a>
                </div>
            </div>
            <!-- Service 3: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Personenbetreuung</h3>
                    <p class="text-gray-600 mb-6 flex-grow">Nach einem anstrengenden Tag würden Sie gerne nach Hause kommen, wo bereits ein frisch gekochtes Essen auf dem Tisch auf Sie wartet?</p>
                    <a href="/#service-personenbetreuung" class="text-brand-green hover:text-brand-green-light font-medium transition-colors mt-auto">
                        Mehr erfahren →
                    </a>
                </div>
            </div>
        </div>
        <div class="text-center mt-12">
            <p class="text-white italic">Für Ihr persönliches Angebot kontaktieren Sie mich bitte.</p>
        </div>
    </div>
</section>

<!-- Detailed Services Sections -->

<!-- Kinderbetreuung Detailed Section -->
<section id="service-kinderbetreuung" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
            <!-- Service Image -->
            <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <div id="slideshow-kinderbetreuung" class="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <!-- Using the picture shortcode for the slideshow images -->
                    <div class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100">
                        {% picture "/assets/images/original/kinderbetreuung/suzanna-kind-1.jpg", "Kinderbetreuung: Suzana mit Kind", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                    </div>
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Professionelle Kinderbetreuung</h2>

                <!-- Feature Box -->
                <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green mb-8">
                    <h3 class="text-lg font-bold text-brand-green mb-2 font-heading">Mein Angebot umfasst:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Flexible Zeitgestaltung:</strong> Ich stelle 24 Stunden Flexibilität zur Verfügung, um auf Ihre Bedürfnisse einzugehen.</li>
                        <li><strong>Altersgerechte Beschäftigungen:</strong> Die Aktivitäten sind auf das Alter und den Entwicklungsstand der Kinder abgestimmt. Dazu gehören verschiedene Angebote wie z.B. gemeinsames Kochen, Basteln und /oder Spielen, die sowohl Spaß machen als auch die Entwicklung der Kinder fördern.</li>
                    </ul>
                </div>

                <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-prose">
                    Als Sozialarbeiterin mit einem Studium der Sozialarbeit an der Pädagogischen Fakultät der Comenius Universität in Bratislava, Slowakei (2003 - 2010) und einer Prüfung zur Anerkennung meiner Ausbildung gemäß §7 des WKJHG Sozialarbeit bei der Stadt Wien - Magistrat der Stadt Wien MA 11-Amt für Jugend und Familie (2021), sowie einem zusätzlich erworbenen UBV-Zertifikat (UBV 100-43) "Unterstützung bei der Basisversorgung" bei der Caritas der Erzdiözese Wien, biete ich individuelle professionelle Kinderbetreuung für Kinder mit oder ohne Beeinträchtigungen an.
                </p>

                <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-prose">
                    Ich setze mich dafür ein, jedem Kind eine einladende, förderliche und inspirierende Atmosphäre anzubieten, in der es sich frei entfalten und seine Talente entdecken kann.
                </p>

                <a href="/#contact" class="inline-block bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Anfrage stellen
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Gesellschaftliche Begleitung Detailed Section -->
<section id="service-begleitung" class="py-16">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row-reverse items-center">
            <!-- Service Image -->
            <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pl-10">
                <div id="slideshow-begleitung" class="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <!-- Using the picture shortcode for the slideshow, adding multiple images -->
                    <div class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 z-10">
                        {% picture "/assets/images/original/stock/happy-senior-man-in-admidst-group-of-people-in-a-p-2025-02-10-03-53-47-utc.jpg", "Gesellschaftliche Begleitung: Senior in Gesellschaft", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                    </div>
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Gesellschaftliche Begleitung</h2>

                <!-- Feature Box -->
                <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green mb-8">
                    <h3 class="text-lg font-bold text-brand-green mb-2 font-heading">Mein Angebot umfasst:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li>Begleitung zum Geschäftsessen, Kulturveranstaltungen usw.</li>
                        <li>Begleitung bei Familienfeiern oder wichtigen sozialen Anlässen</li>
                        <li>Diskreter und professioneller Begleitservice für Businessreisen</li>
                        <li>Begleitung und Unterstützung bei Arztbesuchen und Behördengängen</li>
                    </ul>
                </div>

                <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-prose">
                     Da mir die Bewahrung der guten Reputation meiner Klienten sehr am Herzen liegt, garantiere ich Ihnen, dass Ihre Begleitperson nicht aus dem Escort-Bereich stammt und keinerlei Fotos oder Videos mit erotischen Inhalten jeglicher Art im Internet veröffentlicht hat. Ihr Vertrauen ist mir äußerst wichtig, und ich setze alles daran, Ihnen eine respektvolle und professionelle Dienstleistung anzubieten.
                </p>

                <a href="/#contact" class="inline-block bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Anfrage stellen
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Personenbetreuung Detailed Section -->
<section id="service-personenbetreuung" class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
            <!-- Service Image - Hidden on mobile -->
            <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 hidden md:block">
                <div id="slideshow-personenbetreuung" class="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <!-- Slideshow Images - Updated to use existing .webp files -->
                    <div class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 z-10">
                        {% picture "/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_132453.webp", "Personenbetreuung: Suzana 1", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                    </div>
                     <div class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 z-0">
                        {% picture "/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_141212.webp", "Personenbetreuung: Suzana 2", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                    </div>
                     <div class="slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 z-0">
                        {% picture "/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_144108.webp", "Personenbetreuung: Suzana 3", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                    </div>
                </div>
                
                <!-- Recipe Gallery - Desktop only -->
                <div id="recipe-gallery-container" class="mt-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Meine kulinarischen Favoriten</h3>
                    <div id="recipe-thumbnails" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4"></div>
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Individuelle Personenbetreuung</h2>

                <!-- Feature Box -->
                <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green mb-8">
                    <h3 class="text-lg font-bold text-brand-green mb-2 font-heading">Im Angebot sind folgende haushaltsnahe Dienstleistungen enthalten:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                       <li><strong>Erledigung von Besorgungen:</strong> Unterstützung bei Einkäufen und anderen notwendigen Erledigungen.</li>
                       <li><strong>Durchführung von verschiedenen Hausarbeiten:</strong> Reinigung, Wäschewaschen und weitere Aufgaben im Haushalt.</li>
                       <li><strong>Hilfestellung bei alltäglichen Verrichtungen:</strong> Unterstützung bei persönlichen Aktivitäten wie Körperpflege und Mobilität.</li>
                       <li><strong>Begleitung bei diversen Aktivitäten:</strong> Hilfe und Begleitung bei Freizeitaktivitäten oder Arztterminen.</li>
                       <li><strong>Zubereitung von Mahlzeiten:</strong> Planung, Einkauf der Zutaten und das Kochen gesunder und schmackhafter Gerichte, die auf Ihre individuellen Vorlieben abgestimmt sind.</li>
                    </ul>
                </div>

                <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-prose">
                    Dienstleistungen sind darauf ausgelegt, Ihnen den Alltag zu erleichtern und Ihre Lebensqualität zu verbessern.
                </p>

                <p class="text-gray-700 mb-6 leading-relaxed text-base md:text-lg max-w-prose">
                   Die Dienstleistungen zielen darauf ab, Ihren Alltag zu erleichtern und Ihre Lebensqualität zu erhöhen, weil ich verstehe, dass Unterstützung in verschiedenen Lebensbereichen entscheidend ist, um Stress zu reduzieren und Ihnen mehr Spielraum zu ermöglichen.
                </p>

                <a href="/#contact" class="inline-block bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Anfrage stellen
                </a>
                
                <!-- Mobile Recipe Gallery with Slideshow -->
                <div class="block md:hidden mt-10">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Meine kulinarischen Spezialitäten</h3>
                    
                    <!-- Mobile Slideshow -->
                    <div id="mobile-slideshow-personenbetreuung" class="relative h-72 rounded-lg overflow-hidden shadow-xl mb-4">
                        <!-- Mobile slideshow will be populated by JavaScript -->
                    </div>
                    
                    <!-- Mobile Recipe Buttons -->
                    <div id="mobile-recipe-thumbnails" class="grid grid-cols-2 gap-2 mb-4"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process Section: How We Work - With interactive tabs -->
<section id="process" class="py-16 bg-brand-green text-white">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-white mb-12 font-heading">So einfach arbeiten wir zusammen</h2>

        <div class="flex flex-col md:flex-row items-stretch justify-center max-w-5xl mx-auto gap-6">
            <!-- Steps on the left -->
            <div class="w-full md:w-96 mb-8 md:mb-0 md:self-center order-2 md:order-1">
                <button id="step1-tab" class="process-step active flex items-center w-full text-left p-4 mb-4 bg-white/20 rounded-lg transition-all hover:bg-white/30">
                    <div class="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center pt-0 -mb-0.5 text-xl font-bold mr-4">1</div>
                    <h3 class="text-xl md:text-2xl font-bold font-heading">Erstkontakt</h3>
                </button>

                <button id="step2-tab" class="process-step flex items-center w-full text-left p-4 mb-4 bg-white/10 rounded-lg transition-all hover:bg-white/30">
                    <div class="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center pt-0 -mb-0.5 text-xl font-bold mr-4">2</div>
                    <h3 class="text-xl md:text-2xl font-bold font-heading">Bedarfsanalyse</h3>
                </button>

                <button id="step3-tab" class="process-step flex items-center w-full text-left p-4 mb-4 bg-white/10 rounded-lg transition-all hover:bg-white/30">
                    <div class="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center pt-0 -mb-0.5 text-xl font-bold mr-4">3</div>
                    <h3 class="text-xl md:text-2xl font-bold font-heading">Angebotslegung</h3>
                </button>

                <button id="step4-tab" class="process-step flex items-center w-full text-left p-4 bg-white/10 rounded-lg transition-all hover:bg-white/30">
                    <div class="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center pt-0 -mb-0.5 text-xl font-bold mr-4">4</div>
                    <h3 class="text-xl md:text-2xl font-bold font-heading">Zusammenarbeit</h3>
                </button>
            </div>

            <!-- Content on the right -->
            <div class="w-full md:w-[58%] flex-grow order-1 md:order-2">
                <div class="bg-white/10 rounded-lg p-6 md:p-8 shadow-lg">
                    <div id="step1-content" class="process-content active transition-opacity duration-500 ease-in-out opacity-100">
                        <p class="text-white mb-4 leading-relaxed">
                            Der erste Schritt zu einer erfolgreichen Zusammenarbeit beginnt mit Ihrer Kontaktaufnahme. Sie können mich ganz einfach auf folgende Weise erreichen:
                        </p>
                        <ul class="list-disc list-inside mb-4 space-y-3 pl-4">
                            <li>Über das Kontaktformular auf dieser Website</li>
                            <li>Per Telefon unter 0677 61385769</li>
                            <li>Per WhatsApp-Nachricht</li>
                            <li>Per E-Mail an goodnews@24ja.at</li>
                        </ul>
                        <p class="text-white mb-4 leading-relaxed">
                            Ich lege großen Wert auf zeitnahe Kommunikation und antworte in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                        </p>
                    </div>

                    <div id="step2-content" class="process-content transition-opacity duration-500 ease-in-out opacity-0">
                        <p class="text-white mb-4 leading-relaxed">
                            Nach der ersten Kontaktaufnahme vereinbaren wir ein unverbindliches Gespräch, das entweder telefonisch oder persönlich stattfinden kann. Dieses Gespräch dient dazu, Ihre Bedürfnisse und Wünsche umfassend zu verstehen und eine optimale Grundlage für mein Angebot für Sie zu schaffen.
                        </p>
                        <ul class="list-disc list-inside mb-4 space-y-3 pl-4">
                            <li>Den zeitlichen Rahmen und die Häufigkeit der gewünschten Unterstützung zu klären.</li>
                            <li>Besondere Anforderungen oder Erwartungen zu besprechen.</li>
                            <li>Offene Fragen zu beantworten und gegenseitiges Vertrauen aufzubauen</li>
                        </ul>
                    </div>

                    <div id="step3-content" class="process-content transition-opacity duration-500 ease-in-out opacity-0">
                        <p class="text-white mb-4 leading-relaxed">
                            Basierend auf den Erkenntnissen aus unserem Gespräch erstelle ich ein Angebot mit einer detaillierten Beschreibung der angebotenen Leistungen. Dieses Angebot wird die vereinbarten Zeiten, den Umfang der Leistungen sowie die Zahlungsbedingungen für Sie umfassen.
                        </p>
                    </div>

                    <div id="step4-content" class="process-content transition-opacity duration-500 ease-in-out opacity-0">
                        <p class="text-white mb-4 leading-relaxed">
                            Nach Ihrer Zustimmung zum Angebot beginnen wir mit der konkreten Umsetzung unserer Zusammenarbeit, ich passe mich Ihrer Wünsche, Bedürfnisse und Zeitpläne an.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-16">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6 font-heading">Kontakt</h2>

        <!-- Ethics Disclaimer (Moved and Restyled) -->
        <div class="ethics-disclaimer max-w-2xl mx-auto mb-10 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center shadow-sm">
            <p class="text-gray-700">
                <strong>Wichtiger Hinweis:</strong> In meinem Unternehmen lege ich großen Wert auf Ethik. Daher möchte ich Sie darauf hinweisen, dass hier keinesfalls intime körperliche Leistungen angeboten werden. Ich bitte um Ihr Verständnis, falls Sie als Kunde solche Dienstleistungen in Erwägung ziehen. Vielen Dank für Ihre Rücksichtnahme.
            </p>
        </div>

        <div class="flex flex-col md:flex-row">
            <!-- Contact Form -->
            <div class="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
                <form name="contact-form" id="contact-form" action="#" method="POST" class="bg-white p-8 rounded-lg shadow-lg">
                    <div class="mb-6">
                        <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" autocomplete="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-700 font-medium mb-2">E-Mail</label>
                        <input type="email" id="email" name="email" autocomplete="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required>
                    </div>
                    <div class="mb-6">
                        <h3 class="block text-gray-700 font-medium mb-3">Ich interessiere mich für:</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="radio" id="radio-kinderbetreuung" name="service" value="Kinderbetreuung" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="radio-kinderbetreuung" class="ml-2 block text-gray-700">Kinderbetreuung</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" id="radio-begleitung" name="service" value="Gesellschaftliche Begleitung" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="radio-begleitung" class="ml-2 block text-gray-700">Gesellschaftliche Begleitung</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" id="radio-personenbetreuung" name="service" value="Personenbetreuung" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="radio-personenbetreuung" class="ml-2 block text-gray-700">Personenbetreuung</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 font-medium mb-2">Nachricht</label>
                        <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required></textarea>
                    </div>

                    <button type="submit" class="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-4 rounded-md transition-colors">
                        Nachricht senden
                    </button>
                </form>
            </div>

            <!-- Contact Details -->
            <div class="w-full md:w-1/2 md:pl-8">
                <div class="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
                    <h3 class="text-xl font-bold text-gray-800 mb-6 font-heading">Kontaktdaten</h3>

                    <div class="mb-6">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Anschrift</h4>
                        <p class="text-gray-600">
                            24ja - Macht das Leben leichter e.U.<br>
                            Collection Business Center Wien Goldenes Quartier<br>
                            Tuchlauben 7/A, AT - 1010 Wien
                        </p>
                    </div>

                    <div class="mb-6">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Telefon</h4>
                        <p class="text-gray-600">0677 61385769</p>
                    </div>

                    <div class="mb-6">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">E-Mail</h4>
                        <p class="text-gray-600">goodnews@24ja.at</p>
                    </div>

                    <div class="mt-8">
                        <a href="https://wa.me/4367761385769" class="inline-flex items-center bg-brand-green hover:bg-brand-green-light text-white font-medium py-2 px-4 rounded-md transition-colors">
                            <img src="/assets/icons/whatsapp.svg" alt="WhatsApp Icon" class="w-5 h-5 mr-2">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 