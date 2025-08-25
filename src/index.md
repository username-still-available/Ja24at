---
layout: base.njk
title: 24ja.at | Kinderbetreuung, Personenbetreuung & Begleitung in Wien
---

<!-- About Section - Moved here and redesigned -->
<section id="about" class="py-16 bg-brand-green text-white">
    <div class="container mx-auto px-6">
        <!-- Image centered and made more prominent -->
        <div class="flex flex-col items-center">
            <!-- Image Container - Reduced by 30% from original size -->
            <div class="w-full max-w-xs mb-4 mx-auto scale-70 transform" style="transform: scale(0.7);">
                <div class="rounded-lg shadow-xl overflow-hidden flex items-center justify-center aspect-[3/4]">
                    {% picture site.imagePrefix + '/assets/images/original/Zuzanna/Zuzanna Foto.jpg', "Zuzana Jancova - Professionelle Betreuung", "100vw", "w-full h-full object-cover" %}
                </div>
            </div>

            <!-- Social icons directly under image and centered -->
            <div class="w-full flex items-center justify-center mb-3">
                <div class="flex items-center justify-center space-x-4">
                    <a href="https://www.youtube.com/channel/UCawM2Ctp5B72dTxB-WCf7Fg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-white hover:text-brand-green-light transition-colors" title="YouTube">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor" aria-hidden="true">
                            <path d="M23.5 6.2c-.2-1.2-1.2-2.2-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4 0.7 5 0.5 6.2 0 8.3 0 12 0 12s0 3.7.5 5.8c.2 1.2 1.2 2.2 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.2 2.2-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.7 15.6V8.4l6.1 3.6-6.1 3.6z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mag-zuzana-j-9211a6196/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-white hover:text-brand-green-light transition-colors" title="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9.5h3.414v1.493h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.267 2.37 4.267 5.456v5.853zM5.337 8.005a2.062 2.062 0 11-.001-4.125 2.062 2.062 0 01.001 4.125zM6.986 20.452H3.69V9.5h3.296v10.952z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Heading now below image -->
            <h2 class="text-3xl font-bold text-center text-white mb-2 font-heading">Meine Geschichte</h2>

            <!-- About Text - Now below heading -->
            <div class="w-full max-w-3xl text-center md:text-left">
                <p class="text-white mb-6">
                    Nach meinem abgeschlossenen Magisterstudium der Sozialen Arbeit an der Universität Bratislava in der Slowakei und einem zweijährigen Aufenthalt in den USA, wo ich ein Praktikum absolvierte, begann meine "Reise" in Österreich als Putzfrau in einem Hotel im ersten Bezirk in Wien. Nach dem Erlernen der deutschen Sprache und dem Bestehen der rechtlichen Prüfung zur Anerkennung meiner Ausbildung für Sozialarbeit gemäß § 7 des WKJHG, die ich erfolgreich beim Magistrat 11 der Stadt Wien ablegte, qualifizierte ich mich als Sozialarbeiterin in Österreich.
                </p>
                <div class="border-l-4 border-white pl-10 py-4 my-8">
                    <p class="text-white italic font-medium text-lg font-heading">
                        "Glück ist das einzige, was sich verdoppelt, wenn man es teilt."<br>
                        <span class="text-sm mt-2 block">- Albert Schweitzer</span>
                    </p>
                </div>
                <p class="text-white italic">
                        Als Sozialarbeiterin sehe ich es als meine Berufung, Menschen in nicht einfachen Lebenssituationen zur Seite zu stehen. Mein Interesse gilt dem gesamten Menschen in seiner Authentizität, Wahrheit und inneren Kohärenz. Mein Ziel ist es, ihnen nicht nur Unterstützung anzubieten, sondern ihnen auch Zuversicht und Freude zu schenken, um in ihre eigene Kraft zurückzukommen. Ein Mensch sollte fühlen, anstatt im Leben nur zu funktionieren – nur so kann er die wahre Tiefe und Schönheit des Daseins erleben. Ein Mensch sollte sich selbst gehören, um frei zu sein. Ein Mensch zu sein, ist eine Aufgabe. Werde der, der du bist.
                </p>

            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="pt-8 pb-16 md:pt-16 bg-brand-green">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-white mb-12 font-heading">Meine Leistungen</h2>

        <!-- Use Grid for equal columns, increased gap -->
        <div class="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6">
            <!-- Service 1: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Kinderbetreuung durch Fachkraft mit Magister-Abschluss</h3>
                    <p class="text-gray-600 mb-6 flex-grow">Ich unterstütze Sie in Ihrem Alltag, sodass Sie sich auf Ihre wichtigen geschäftlichen Termine konzentrieren können, ohne sich Sorgen um Ihre Kinder machen zu müssen.</p>
                    <a href="/#service-kinderbetreuung" class="text-brand-green hover:text-brand-green-light font-medium transition-colors mt-auto">
                        Mehr erfahren →
                    </a>
                </div>
            </div>
            <!-- Service 2: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Gesellschaftliche Begleitung durch Mitarbeiter mit Magister-Abschluss</h3>
                    <p class="text-gray-600 mb-6 flex-grow">Ich unterstütze Sie gern, falls Sie für Ihren wichtigen Termin eine Begleitperson brauchen.</p>
                    <a href="/#service-begleitung" class="text-brand-green hover:text-brand-green-light font-medium transition-colors mt-auto">
                        Mehr erfahren →
                    </a>
                </div>
            </div>
            <!-- Service 3: Removed md:basis-1/3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div class="bg-brand-green-light h-2"></div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-4 font-heading">Alltagsassistenz durch Fachkraft mit Magister-Abschluss</h3>
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
                <div class="w-full relative h-96 md:h-[30rem] rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                    {% picture site.imagePrefix + '/assets/images/original/kinderbetreuung/suzanna-kind-1.jpg', "Kinderbetreuung: Suzana mit Kind", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Kinderbetreuung durch Fachkraft mit Magister-Abschluss</h2>

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
                <div class="w-full relative h-96 md:h-[30rem] rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                    {% picture site.imagePrefix + '/assets/images/original/gesellschaftliche-begleitung/Seniorin.jpg', "Gesellschaftliche Begleitung: Seniorin", "(min-width: 768px) 50vw, 100vw", "w-full h-full object-cover" %}
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Gesellschaftliche Begleitung durch Mitarbeiter mit Magister-Abschluss</h2>

                <!-- Feature Box -->
                <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green mb-8">
                    <h3 class="text-lg font-bold text-brand-green mb-2 font-heading">Mein Angebot umfasst:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li>Begleitung zum Geschäftsessen, Kulturveranstaltungen usw.</li>
                        <li>Begleitung bei Familienfeiern oder wichtigen sozialen Anlässen</li>
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
            <div class="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 block">
                <!-- Slideshow container -->
                <div id="slideshow-personenbetreuung" class="css-slideshow-fade relative w-full aspect-square rounded-lg overflow-hidden shadow-xl bg-white">
                    <!-- Bild 1: Brot (beibehalten) -->
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/brot-aus-demetermehl.jpg', "Frisch gebackenes Brot aus Demeter-Mehl", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Frisch gebackenes Brot aus Demeter-Mehl</div>
                    </div>
                    <!-- Bild 2: Torte (beibehalten) -->
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/ananas-schokoladen-torte.jpg', "Cremige Ananas-Schokoladen-Torte", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Cremige Ananas-Schokoladen-Torte</div>
                    </div>
                    <!-- Bild 3: Neue Bilder -->
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/mini-schokotoertchen.jpg', "Kleine Schokoladentörtchen", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Kleine Schokoladentörtchen</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/baerchen-dessert.jpg', "Süßes Bärchen-Dessert", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Süßes Bärchen-Dessert</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/abendessen-zu-hause.jpg', "Frisch zubereitetes Abendessen zu Hause", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Frisch zubereitetes Abendessen zu Hause</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/mandelkekse-demeter.jpg', "Mandelkekse mit Demeter-Honig", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Mandelkekse mit Demeter-Honig</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/lammrippchen-gegrillt.jpg', "Gegrillte Lammrippchen", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Gegrillte Lammrippchen</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/gericht-1.jpg', "Lammspieße", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Lammspieße</div>
                    </div>
                    <div class="slide">
                        {% picture site.imagePrefix + '/assets/images/original/erwachsenenbetreuung/gericht-2.jpg', "Wunderbare Köstlichkeit", "100vw", "w-full h-full object-cover" %}
                        <div class="slide-caption">Wunderbare Köstlichkeit</div>
                    </div>
                </div>
            </div>

            <!-- Service Content -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-heading">Alltagsassistenz durch Fachkraft mit Magister-Abschluss</h2>

                <!-- Feature Box -->
                <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green mb-8">
                    <h3 class="text-lg font-bold text-brand-green mb-2 font-heading">Im Angebot sind folgende haushaltsnahe Dienstleistungen enthalten:</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                       <li><strong>Erledigung von Besorgungen:</strong> Unterstützung bei Einkäufen und anderen notwendigen Erledigungen.</li>
                       <li><strong>Durchführung von verschiedenen Hausarbeiten:</strong> Reinigung, Wäschewaschen und weitere Aufgaben im Haushalt.</li>
                       <li><strong>Hilfestellung bei alltäglichen Verrichtungen:</strong> Unterstützung bei persönlichen Aktivitäten wie Körperpflege und Mobilität.</li>
                       <li><strong>Zubereitung von Mahlzeiten:</strong> Planung, Einkauf der Zutaten und das Kochen gesunder und schmackhafter Gerichte, die auf Ihre individuellen Vorlieben abgestimmt sind. </li>
                       <li><strong>Fachkundige Unterstützung in sozialen Angelegenheiten.</strong></li>
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
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section MOVED TO HERE -->
{% include "testimonials.njk" %}

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
                            <li>Per Telefon unter 0664 127 2764</li>
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
                <form name="contact" id="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="bg-white p-8 rounded-lg shadow-lg">
                    <!-- This hidden field is REQUIRED for AJAX submissions -->
                    <input type="hidden" name="form-name" value="contact">
                    <p class="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    
                    <h3 class="text-xl font-bold text-gray-800 mb-6 font-heading">Kontaktformular</h3>
                    
                    <p class="text-gray-700 mb-6 text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
                        Um Ihnen den besten Service zu bieten, bitte ich Sie um vorherige Terminvereinbarung.
                    </p>
                    
                    <div class="mb-6">
                        <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" autocomplete="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-gray-700 font-medium mb-2">E-Mail</label>
                        <input type="email" id="email" name="email" autocomplete="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="block text-gray-700 font-medium mb-2">Telefonnummer <span class="text-gray-500 text-sm">(optional)</span></label>
                        <input type="tel" id="phone" name="phone" autocomplete="tel" placeholder="z.B. 0664 1234567 oder +43 664 1234567" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light">
                    </div>
                    <div class="mb-6">
                        <h3 class="block text-gray-700 font-medium mb-3">Ich interessiere mich für:</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox-kinderbetreuung" name="service[]" value="Kinderbetreuung durch Fachkraft mit Magister-Abschluss" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="checkbox-kinderbetreuung" class="ml-2 block text-gray-700">Kinderbetreuung durch Fachkraft mit Magister-Abschluss</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox-begleitung" name="service[]" value="Gesellschaftliche Begleitung durch Mitarbeiter mit Magister-Abschluss" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="checkbox-begleitung" class="ml-2 block text-gray-700">Gesellschaftliche Begleitung durch Mitarbeiter mit Magister-Abschluss</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox-personenbetreuung" name="service[]" value="Alltagsassistenz durch Fachkraft mit Magister-Abschluss" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300">
                                <label for="checkbox-personenbetreuung" class="ml-2 block text-gray-700">Alltagsassistenz durch Fachkraft mit Magister-Abschluss</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 font-medium mb-2">Nachricht</label>
                        <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-light" required></textarea>
                    </div>

                    <!-- Datenschutzerklärung Checkbox -->
                    <div class="mb-6">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="privacy" name="privacy" type="checkbox" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300 rounded" required>
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="privacy" class="text-gray-700">Ich habe die <a href="/datenschutz/" class="text-brand-green hover:underline">Datenschutzerklärung</a> gelesen und stimme zu.</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Newsletter Checkbox -->
                    <div class="mb-6">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="newsletter" name="newsletter" type="checkbox" class="h-4 w-4 text-brand-green focus:ring-brand-green-light border-gray-300 rounded">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="newsletter" class="text-gray-700">Newsletter-Anmeldung: Möchten Sie jeden Monat die besten Rezepte erhalten?</label>
                                <p class="text-gray-500 mt-1">Bitte beachten Sie, dass der Newsletter erst nach Ihrer Bestätigung in Ihrem Posteingang aktiviert wird.</p>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-3 px-4 rounded-md transition-colors">
                        Nachricht senden
                    </button>
                </form>
            </div>

            <!-- Contact Details -->
            <div class="w-full md:w-1/2 md:pl-8">
                <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                    <h3 class="text-xl font-bold text-gray-800 mb-6 font-heading">Kontaktdaten</h3>

                    <div class="mb-4">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Anschrift</h4>
                        <p class="text-gray-600">
                            24ja - Macht das Leben leichter e.U.<br>
                            Mag. Zuzana Jancova<br>
                            Tuchlauben 7a Business Center<br>
                            AT - 1010 Wien
                        </p>
                    </div>

                    <div class="mb-4">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Telefon</h4>
                        <p class="text-gray-600">0664 127 2764</p>
                    </div>

                    <div class="mb-4">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">E-Mail</h4>
                        <p class="text-gray-600">goodnews@24ja.at</p>
                    </div>

                    <div class="mb-4">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Soziale Medien</h4>
                        <div class="flex items-center space-x-4">
                            <a href="https://www.youtube.com/channel/UCawM2Ctp5B72dTxB-WCf7Fg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-brand-green hover:text-brand-green-light transition-colors" title="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor" aria-hidden="true">
                                    <path d="M23.5 6.2c-.2-1.2-1.2-2.2-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5C1.7 4 0.7 5 0.5 6.2 0 8.3 0 12 0 12s0 3.7.5 5.8c.2 1.2 1.2 2.2 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.2 2.2-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.7 15.6V8.4l6.1 3.6-6.1 3.6z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mag-zuzana-j-9211a6196/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-brand-green hover:text-brand-green-light transition-colors" title="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.24-3.037-2.066-3.037-1.851 0-2.118 1.445-2.118 2.939v5.667H9.409V9.5h3.354v1.493h.048c.468-.9 1.607-1.85 3.303-1.85 3.536 0 4.033 2.37 4.033 5.456v5.853zM5.3 8.005a2.062 2.062 0 11.001-4.125A2.062 2.062 0 015.3 8.005zM6.915 20.452H3.68V9.5h3.235v10.952z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Map Placeholder -->
                    <div class="mt-6">
                        <h4 class="text-gray-700 font-medium mb-2 font-heading">Standort</h4>
                        <div class="map-container relative overflow-hidden rounded-lg shadow-md bg-gray-100">
                            <!-- Static map image (privacy-friendly approach) -->
                            <div class="aspect-w-16 aspect-h-9 bg-gray-200 min-h-[220px] sm:min-h-[300px] md:min-h-0">
                                {% picture site.imagePrefix + '/assets/images/maps/map.png', "Collection Business Center Wien Goldenes Quartier, Tuchlauben 7a, 1010 Wien", "100vw", "w-full h-full object-cover object-center scale-125 md:scale-100 transition-transform rounded-lg shadow-md" %}
                                <!-- Privacy overlay with information and link -->
                                <div class="absolute inset-0 bg-brand-green bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                    <p class="font-bold mb-2">24ja - Macht das Leben leichter e.U.</p>
                                    <p class="mb-4">Tuchlauben 7a, 1010 Wien</p>
                                    <a 
                                        href="https://maps.google.com/?q=Tuchlauben+7,+1010+Wien,+Austria" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="bg-white text-brand-green px-4 py-2 rounded-md shadow-sm font-bold transition-colors hover:bg-gray-100"
                                    >
                                        In Google Maps öffnen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 