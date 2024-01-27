import { Injectable } from '@angular/core';
import { Cities } from './cities';

@Injectable({
  providedIn: 'root',
})
export class CitiesServiceService {
  constructor() {}

  cities1: Cities[] = [
    {
      id: 0,
      name: 'Islamabad',
      province: 'Hauptstadt',
      photo: '../assets/isl1.jpg',
      description1:
        'Islamabad ist die Hauptstadt von Pakistan. Die Stadt liegt im Nordosten des Landes im Punjab, ist aber nicht Teil dieser Provinz sondern bildet das Hauptstadtterritorium unter Bundesverwaltung. Sie ist mit Rawalpindi so gut wie zusammengewachsen und sollte zusammen mit diesem betrachtet werden. Im Großraum wohnen gut 4½ Millionen.',
      description2:
        'Das im Süden direkt angrenzende Rawalpindi wird als Islamabads Schwesterstadt angesehen. Tatsächlich ist Rawalpindi bis heute die (nach Einwohnern) größere Stadt und das lebendige Marktzentrum des westlichen Punjab. Dort ist auch die Mehrzahl der Militärhauptquartiere untergebracht. Islamabad dagegen ist die moderne und weitläufige Stadt, für pakistanische Verhältnisse sehr sauber und ruhig. Die Stadt ist dank der Sektoren effizient unterteilt: In jedem Sektor befinden sich bestimmte Einrichtungen wie eine Moschee und ein Markt. Das kommerzielle Zentrum der Stadt ist bekannt unter dem Namen Blue Area und erstreckt sich entlang der Jinnah Avenue, benannt nach Pakistans Gründer Muhammad Ali Jinnah. Das Ostende der Blue Area reicht bis an die Parliament Road, wo sich der Großteil der Regierungsgebäude befindet. Der Norden der Margalla-Hügel am Rande der Stadt wurde in einen Nationalpark umgewandelt.',
      description3:
        'Islamabads Architektur besteht aus einer Mischung zwischen islamischer Tradition und Moderne. Der Saudi-Pak Tower ist ein Beispiel für die Kombination von mogul-indischem Dekor und moderner Architektur. In der Stadt befindet sich die Faisal-Moschee, bekannt für ihre auffällige Bauweise und enorme Größe. Die Quaid-i-Azam-Universität befindet sich in Islamabad, ebenso die Regierungsgebäude wie das Gebäude der Nationalversammlung, des Obersten Gerichtshofs und das des Präsidenten. Auch die meisten ausländischen Botschaften befinden sich heute in Islamabad. Ein weiteres Wahrzeichen der Stadt ist ein riesiger, silberner Globus, errichtet 2004 im Zuge Pakistans Ausrichtung des SAARC-Gipfels. Wichtigste Sportstätte in Islamabad ist das Jinnah-Stadion. Die Stadt ist heute im Zuge vergangener Anschläge von zahlreichen Sicherheitsmaßnahmen geprägt. Die großen Luxushotels Serena und Marriott, aber auch beispielsweise das Fastfood-Restaurant McDonald’s, gleichen abgeschirmten Festungen. Vor Einfahrt mit einem Fahrzeug wird dieses von privatem Wachpersonal mittels Spiegeln und Unterbodenkamera sowie teils auch mit Bombenspürhunden auf Sprengstoff und Waffen hin kontrolliert. An gefährdeten Gebäuden wurden vielfach meterhohe Bombenschutzmauern errichtet und ganze Straßenzüge für den allgemeinen Verkehr gesperrt. Das Straßenbild zeichnet sich, insbesondere sobald man sich dem Regierungs- und dem Botschaftsviertel nähert, durch bewaffnete Check-Points zur Fahrzeug- und Personenkontrolle sowie durch eine Vielzahl von Fahrbahnhindernissen aus.',
      gallery: [
        '../../assets/isl2.jpg',
        '../../assets/isl3.jpg',
        '../../assets/isl5.jpg',
        '../../assets/isl7.jpg',
        '../../assets/isl8.jpg',
      ],
    },
    {
      id: 1,
      name: 'Lahore',
      province: 'Punjab',
      photo: '../../assets/lah0.jpg',
      description1:
        'Lahore liegt am Ufer des Flusses Ravi in einer Höhe von etwa 215m. nur wenige Kilometer von der Grenze zu Indien entfernt. Die nächstgelegene Großstadt ist das rund 55 km östlich befindliche Amritsar in Indien. Lahore ist das handwerkliche, merkantile, industrielle und dienstleistungsmäßige Zentrum des pakistanischen Teils des Punjab. Hier befinden sich Schulen und Hochschulen ebenso wie Kliniken etc.',
      description2:
        'Die Geschichte der Stadt geht mindestens 2000 Jahre zurück, wobei einige Historiker auch von Daten sprechen, die bis zu 4000 Jahre zurückgehen. Seit dem 11. Jahrhundert ist Lahore eines der geistigen Zentren des Islam auf dem indischen Subkontinent; die Stadt war zwischen 1585 und 1598 die Hauptstadt des Mogulreiches. Der Mogulherrscher Akbar I. war im 16. Jahrhundert Initiator der Prachtentfaltung in Lahore und machte die Stadt zu einem der Zentren der islamischen Kultur des Subkontinents. Bis zur Fertigstellung der Hauptstadt Shahjahanabad (heute Old Delhi) durch Kaiser Shah Jahan blieb Lahore neben Agra, Delhi und Ajmer eine der mogulischen Hauptstädte, in der die Kaiser regelmäßig residierten. Auch nachher blieb sie wegen ihrer strategischen Bedeutung als Zentrum des Punjab und Ausgangspunkt der Straßen nach Norden eine äußerst wichtige Stadt.[7] Wichtige Schriftsteller der Mogulzeit aus Lahore sind vor allem der für seine raffinierten Gedichte und Essays bekannte Munir Lahauri und der klassische Brief- und Essayschreiber Chandar Bhan Brahman, der als Shah Jahans Sekretär beschäftigt war. Von 1799 bis zur Eroberung durch englische Truppen 1848 war Lahore die Hauptstadt des Reichs der Sikhs. Heute ist sie einer der Sitze der 1882 gegründeten University of the Punjab. Auch in der modernen Geschichte spielt Lahore eine wichtige Rolle. Sie gilt als Geburtsstadt des unabhängigen Pakistan, da hier über die Zukunft des Landes und seine Unabhängigkeit entschieden wurde. Denkmal für diese Bewegung ist der Turm Minar-e Pakistan, der nach der Unabhängigkeit 1947 dort errichtet wurde. In Lahore lebte auch der postum zum Nationaldichter Pakistans erkorene Muhammad Iqbal (1877–1938), dessen Philosophie eines humanistischen Islams neuerdings auch in Europa auf Interesse stößt. Während Lahore zur Zeit Britisch-Indiens eine kosmopolitische, tolerante Metropole war, in der viele religiöse Gemeinschaften nebeneinander lebten, ist die Stadt im unabhängigen Pakistan in den letzten Jahrzehnten zu einem Austragungsort islamistischer Gewalttätigkeiten geworden.[9] So kam es am 3. März 2009 zu einem Anschlag auf das sri-lankische Cricket-Team. Bewaffnete Männer feuerten in Lahore mit Raketenwerfern und Maschinengewehren auf den Bus der Mannschaft – mindestens sieben Menschen starben, u. a. sechs Spieler und ein Trainer wurden verletzt. Im März 2013 griffen aufgebrachte Muslime die christliche Minderheit im Stadtteil Joseph Colony an, nachdem in einem Streit zwischen zwei Bekannten ein Muslim einen Christen der Blasphemie beschuldigt hatte. Der Mob brannte zwei Kirchen und mehr als 150 Häuser christlicher Familien nieder bzw. zerstörte diese.[10] Die Polizei griff nicht ein. Der Unwille von Polizei und Behörden, die Christen zu schützen, führten zu einer Massenflucht; etwa 4.000 Christen verließen Lahore.[11] Bei der Volkszählung im Jahre 1998 hatte der Anteil der Christen an der Bevölkerung der Stadt noch 5,8 % betragen.[12] Ein islamistisch motivierter Selbstmordanschlag vor dem Polizeihauptquartier von Lahore am 18. Februar 2015 forderte vier Todesopfer.[13] Am 27. März 2016 ereignete sich ein islamistischer Terroranschlag im Gulshan-e-Iqbal-Park, der der christlichen Minderheit galt, die dort das Osterfest beging. Mehr als 70 Personen starben. Nichtsdestoweniger ist Lahore weiterhin ein Zentrum von Kultur, Musik, Sport und Mode in Pakistan. Es beherbergt drei Cricket-Teams (Lahore Qalandars, Lahore Lions, Lahore Eagles) sowie den Fußballclub WAPDA F.C. Die Lahore Fashion Week ist die zweitgrößte Pakistans nach der in Karachi. Bekannt ist auch das Lahorer Literaturfestival (Lahore Literary Festival) und die reichhaltige und besonders für ihre Fleischgerichte bekannte Lahorer Küche.',
      description3:
        'Lahore gilt als Hochburg der pakistanischen Filmindustrie und wird, in Anlehnung an Hollywood und Bollywood auch Lollywood genannt. Im Gegensatz zum indischen Film, der in den letzten Jahren an internationalem Ansehen gewonnen hat, befindet sich die pakistanische Filmindustrie seit Jahren in einer Krise. Selbst hochwertige Produktionen werden außerhalb Pakistans kaum wahrgenommen. Lahore beherbergt einige der ältesten Institute des Landes. Hinsichtlich des Bildungssystems ist Lahore die am weitesten entwickelte Stadt in Pakistan, da sie die meisten Berufler im Bereich IT, Ingenieurwesen, Medizin, Nuklearwissenschaften, Pharmazie, Biotechnologie und Wirtschaftswissenschaften hervorbringt. Besonders renommierte Universitäten und Schulen sind unter anderem die University of Engineering and Technology, Lahore (UET Lahore), die University of Management and Technology (UMT), die Lahore University of Management Sciences (LUMS), das National College of Arts (NCA), die King Edward Medical University, die University of the Punjab, das Aitchison College, das St. Anthony’s College, die Bloomfield Hall Schools (BHS), die Lahore Grammar School (LGS) und das Beaconhouse School System. Die University of the Punjab ist zudem die einzige Universität in Südasien, die Partner diverser Experimente des CERN Laboratories ist. Die Alphabetisierungsrate in den Jahren 2014/15 bei der Bevölkerung über 10 Jahren liegt bei 80 % (Frauen: 77 %, Männer: 82 %) und liegt damit über dem Durchschnitt Pakistans von 60 %.',
      gallery: [
        '../../assets/lah1.jpg',
        '../../assets/lah2.jpg',
        '../../assets/lah3.jpg',
        '../../assets/lah4.jpg',
        '../../assets/lah5.jpg',
        '../../assets/lah6.jpg',
        '../../assets/lah7.jpg',
      ],
    },
    {
      id: 2,
      name: 'Multan',
      province: 'Punjab',
      photo: '../../assets/mul0.jpg',
      description1:
        'Multan ist eine Großstadt in der pakistanischen Provinz Punjab. Sie ist mit ca. 1,9 Millionen Einwohnern die siebtgrößte Stadt des Landes. Multan liegt im Süden der Provinz Punjab. Das Umland ist flach und wird landwirtschaftlich genutzt. Viele Kanäle versorgen den Distrikt mit Wasser aus nahen Flüssen (Chanab, Ravi). Im Sommer ist es extrem heiß.',
      description2:
        'Multan liegt an der Hauptinvasionsroute Indiens in Richtung Zentralasien und hat in ihrer langen Geschichte viele Kriege überstanden. Die frühesten geschichtlichen Erwähnungen gehen bis zur Zeit von Alexander dem Großen zurück. Historiker vermuten, dass es sich bei Multan um die Stadt Maii-us-than handelt, deren Zitadelle von den Truppen Alexanders erstürmt wurde, nachdem sie gesehen hatten, wie ihr König verletzt und ohnmächtig auf dem Schlachtfeld lag. Mitte des 5. Jahrhunderts wurde die Stadt von Hephtaliten eingenommen. Diese Nomaden blieben nicht lange und es folgte für längere Zeit eine hinduistische Regentschaft. Im Jahr 641 besuchte der chinesische Mönch Xuanzang Multan. Er berichtete, dass der Boden reich und fruchtbar und die Stadt dicht bewohnt sei. Es gäbe ungefähr acht Tempel für Devas. Der große „Sonnentempel“ sei großartig verziert, das Bild Mitras in Gold gegossen und mit seltenen Edelsteinen geschmückt. Im 7. Jahrhundert hatte Multan den ersten Kontakt mit muslimischen Armeen. Der Feldherr Mohallab führte Armeen, die zahlreiche Angriffe von Persien nach Indien durchführten. Sie kamen jedoch nicht, um zu erobern, sondern um zu erkunden. Nur wenige Jahrzehnte später kam Muhammad bin Qasim im Namen der Araber und eroberte Multan und Sindh. Zu dieser Zeit war Multan als „Stadt des Goldes“ bekannt. Zahlreiche Historiker haben über einen sehr großen Hindutempel geschrieben, der mehr als 6000 Menschen aufnehmen konnte. Er war als „Sonnentempel“ bekannt. Nach der Eroberung durch Qasim war die Stadt unter muslimischer Regentschaft, blieb jedoch weitgehend selbstständig. Ende des 10. Jahrhunderts wurde die Stadt von Mahmud von Ghazni zweimal angegriffen. Dabei zerstörte er den Sonnentempel, aber er blieb nicht in der Stadt. Nach dem Sieg von Muhammad von Ghur und seiner Gründung der Hauptstadt in Delhi wurde Multan Teil des im Jahr 1206 gegründeten Sultanats von Delhi. Nach dem Aufstieg der Mongolen erhielt es wieder einiges an Unabhängigkeit zurück, um schlagkräftig gegen Angriffe aus Zentralasien sein zu können. Im Mogulreich erlebte Multan 200 Jahre des Friedens und wurde als Dar-ul-Aman (Stadt des Friedens) bekannt. Viele Gebäude wurden in jener Zeit gebaut und die landwirtschaftliche Produktion stieg stark an. Der Fall des Reiches von Mughal war für Multan nicht so zerstörend, wie für viele andere Städte. Die Stadt entkam den Zerstörungen der Armee von Nadir Schah, wurde jedoch von Kabul aus von zahlreichen afghanischen Dynastien regiert. Im 18. Jahrhundert wurde die Stadt oftmals von Armeen der Sikh angegriffen. Sie zerstörten viele Teile von Multan, blieben aber auch nicht in der Stadt. So wurde Multan wieder unabhängig. Dies währte jedoch erneut nicht lange und mit dem Aufstieg von Ranjit Singh wurde das Ende der muslimischen Herrschaft eingeläutet. Nun kamen erneut die Sikh-Armeen und dieses Mal blieben sie in der Stadt. Durch den Einmarsch der Truppen des britischen Empire, nach einer langen und blutigen Belagerung im Zweiten Sikh-Krieg, wurde Multan Teil Britisch-Indiens. Dies signalisierte auch einen Niedergang für die Stadt. Die Briten bauten zwar eine Eisenbahn, aber die industriellen Kapazitäten wurden nie entwickelt. Nach der Unabhängigkeit Pakistans im Jahre 1947 lag Multan wirtschaftlich darnieder. Seitdem gibt es industrielles Wachstum und die Bevölkerung nimmt kontinuierlich zu. Dennoch befinden sich zahlreiche alte Gebäude in einem schlechten Zustand.',
      description3:
        'Über die Stadt verstreut liegen zahlreiche Mausoleen (Qubbas) von Sufi-Heiligen in jeder Größe sowie Moscheen aus dem 13. und 14. Jahrhundert. Zu den berühmtesten Mausoleen gehören die von Rukn-i-Alam († 1335), Shah Shams Taez, Bahawal Haq und das des bedeutendsten Heiligen von Multan, Baha-uddin Zakariya († 1262), Großvater von Rukn-i Alam, der den Suhrawardiyya-Orden hier eingeführt hat. Viele Mausoleen sind quadratisch oder oktogonal und mit einem Kuppeldach gedeckt, andere wie das Mausoleum von Jusuf Gardizi (1058–1136) in der Altstadt beim Bahar-Tor besitzen ein Flachdach. Ferner gibt es die Festung von Multan, die Jamia, die Sawi und die Wali Eid Gah Moschee. Nach einem alten Sprichwort hat Multan Gräber, Bettler, Hitze und Staub im Überfluss. Der Großteil der Bevölkerung sind Punjabis. Die überwiegende Mehrheit sind Muslime, sowohl Sunniten als auch Schiiten. Die meisten Leute sprechen Panjabi und Siraiki und viele können Urdu. Englisch wird von höher gebildeten Menschen verstanden.',
      gallery: [
        '../../assets/mul1.jpg',
        '../../assets/mul0.jpg',
        '../../assets/mul2.jpg',
        '../../assets/mul3.jpg',
        '../../assets/mul4.jpg',
        '../../assets/mul5.jpg',
      ],
    },
    {
      id: 3,
      name: 'Quetta',
      province: 'Balochistan',
      photo: '../../assets/q0.jpg',
      description1:
        'Quetta (Urdu: کوئٹہ, Paschtu: کوټه, persisch/belutschisch: کویته) ist eine Stadt im Westen Pakistans mit etwa 1 Million Einwohnern. Quetta ist die Hauptstadt der Provinz Belutschistan und die zehntgrößte Stadt Pakistans. In der Stadt leben Angehörige verschiedener Volksgruppen und mehrere Sprachen werden gesprochen. Die größte Bevölkerungsgruppe bilden die Paschtunen.',
      description2:
        'Die Stadt Quetta ist ebenso wie der umgebende Distrikt multiethnisch und vielsprachig. Obwohl die Stadt Verwaltungssitz der Provinz Belutschistan ist, bilden die namensgebenden Belutschen nur eine Minderheit der Bevölkerung. Die Zahlen der letzten Volkszählung aus dem Jahr 1998 werden hinsichtlich der ethnischen und sprachlichen Zugehörigkeit als unzuverlässiger als für andere pakistanische Großstädte beurteilt. Das hängt auch mit den Flüchtlingsströmen und Bevölkerungsbewegungen zusammen, die stark verstärkt vor allem nach 2001 aus Afghanistan und den Stammesgebieten sowie der ehemaligen Nordwestlichen Grenzprovinz stattgefunden haben. Nach dem Zensus von 1998 sprach grob etwa je ein Viertel der Bevölkerung Belutschisch, Paschtunisch und Panjabi/Saraiki. Andere Sprachen wie Brahui waren nicht im Einzelnen erfasst. Manche Statistiken gehen schon für 1998 von einer relativen Mehrheit an Paschtunen aus. Bedingt durch die Flüchtlingsbewegungen kann mit großer Sicherheit angenommen werden, dass sich ihr Bevölkerungsanteil seit 1998 noch vergrößert hat. Ein bronzezeitliches Grab mit reichen Beigaben, der Schatz von Quetta, wurde beim Bau eines Hotels 1985 in der Stadt gefunden. Der Name Quetta kommt von kwatta, dem Namen einer legendären Festung auf Paschtu. Im Kontext der anglo-afghanischen Kriege wurde die Stadt 1876 an Britisch-Indien angeschlossen. Aufgrund ihrer strategisch wichtigen Grenzlage war hier eine große Garnison von 12.000 Mann (1935) stationiert. Am 31. Mai 1935 erlebte die Stadt ein verheerendes Erdbeben von etwa 7,5 Magnituden auf der Richterskala, das große Teile der Stadt zerstörte und etwa 30–40.000 Todesopfer forderte.[5] Nach dem Abzug der Briten und der Teilung Indiens in die beiden souveränen Staaten Indien und Pakistan im Jahre 1947 fiel Quetta an Pakistan und wurde Hauptstadt der Provinz Belutschistan.',
      description3:
        'Der Obstanbau ist verbreitet, Quetta wird auch der "Obstgarten Belutschistans" genannt. Die Stadt exportiert neben frischem Obst auch viele Trockenfrüchte und Mandeln.[19] Der bedeutende Militärstandort Quetta ist ebenfalls ein wichtiger wirtschaftlicher Faktor. Die Stadt war wegen ihrer verkehrstechnisch guten Anbindung im ansonsten dünn besiedelten Belutschistan ein wichtiger Knotenpunkt bei der Versorgung der westlichen Truppen in Afghanistan im Rahmen des Krieges in Afghanistan und der Operation Enduring Freedom. Quetta ist neben Kandahar und Peschawar das dritte wichtige Zentrum der Paschtunen. Gesprochen werden in Quetta die Sprachen Paschtu, Belutschi, Brahui, Sindhi, Panjabi, Urdu und Persisch. Es wird der paschtunische Tanz Atan (auch Attan) getanzt. Er gilt als Nationaltanz Pakistans. Beliebte Musikinstrumente, die unter anderem dazu, aber auch für sich allein stehend gespielt werden, sind das pakistanische Nationalinstrument Rubab, eine Laute, sowie die Sitar, Tabla, Flöte und andere. Neben Cricket und Hockey, zwei Sportarten, die in ganz Pakistan sehr beliebt sind, wird in Quetta auch Fußball gespielt. Ein weiterer Publikumsmagnet ist das Reiterspiel Buzkaschi. 1970 wurde in Quetta die Universität von Belutschistan (University of Balochistan)[21] als erste Universität der Provinz gegründet. Sie hat sieben Fachbereiche mit insgesamt 46 Instituten und mehr als 11000 Studierende.',
      gallery: [
        '../../assets/q2.jpg',
        '../../assets/q6.jpg',
        '../../assets/q4.jpg',
        '../../assets/q5.jpg',
        '../../assets/q1.jpg',
        '../../assets/q0.jpg',
      ],
    },
    {
      id: 4,
      name: 'Gwadar',
      province: 'Balochistan',
      photo: '../../assets/g0.jpg',
      description1:
        'Gwadar (Urdu گوادر) ist eine pakistanische Hafenstadt mit etwa 264.000 Einwohnern. Sie ist Verwaltungssitz des gleichnamigen Distrikts Gwadar. Gwadar liegt etwa 475 km westlich von Karatschi am Arabischen Meer im Südwesten des Landes in der wüstenhaften Region Makran, die zu Belutschistan gehört. Turbat, die Hauptstadt Makrans, liegt etwa 220 km nordöstlich. Die Stadt Gwadar liegt auf einer nach Süden ins Meer ragenden niedrigen, sandigen und langgestreckten Halbinsel, die ebenfalls Gwadar heißt und im Laufe der Jahrtausende zwischen der Festlandsküste und einem vorgelagerten, 13 km langen und bis zu 3 km breiten Felsplateau, dem bis 137 m hohen Koh-e-Batil, angespült wurde. Die somit hammerförmige Halbinsel hat eine Fläche von 570 km² und bildet in ihrem Westen und Osten zwei halbkreisförmige Buchten, die Paddi Zirr (West Bay) und die Deymi Zirr (East Bay).',
      description2:
        'Die Region um das heutige Gwadar wurde während der Bronzezeit von einem unbekannten Volk bewohnt, das in einigen Oasen siedelte. Später wurde das Gebiet zur Provinz Gedrosien des persischen Achämenidenreichs. Vermutlich wurde es von Kyros II. erobert. Während der Eroberungszüge von Alexander dem Großen segelte sein Admiral Nearchos mit einer Flotte entlang der Küste des heutigen Makran. Er beschrieb die Gegend als trocken und bergig, in der die Ichthyophagoi (Fischesser) leben. Deren Name ist die griechische Übersetzung des altpersischen „Mahi khoran“, wovon sich der heutige Name der Region Makran herleitet.[5] Nach dem Zerfall des Alexanderreichs wurde die Region von Seleukos I. regiert, einem der Generäle Alexanders. Ab 303 v. Chr. wurde die Region von Chandara Gupta Moria und anderen lokalen Herrschern regiert. Zeitweise war die Stadt die Heimat von Piraten. Im Jahre 711 eroberte Muhammad bin Qasim mit einem arabisch-muslimischen Heer Gwadar. Später folgten andere Eroberer wie das Mogulreich und die Safawiden. Früh spielte Gwadar eine wichtige Rolle beim Handel mit Sklaven, Gewürzen und Elfenbein zwischen den Anrainern des Indischen Ozeans und Zentralasien.[4] Im 16. Jahrhundert scheiterten die Portugiesen beim Versuch, die Stadt zu erobern, am Widerstand des Stammes der Kalmat.[6] Danach regierten knapp 200 Jahre lokale Stämme der Belutschen das Gebiet. 1783 übertrug Mir Nasir, der Khan von Kalat, die Oberhoheit über Gwadar an Sultan ibn Ahmad von der omanischen Said-Dynastie, der nach einem Thronstreit mit seinem Bruder aus Maskat geflohen war.[4][7] Nachdem Sultan ibn Ahmad Maskat zurückerobert hatte, behielt er die Kontrolle über Gwadar und übertrug die Herrschaft einem Gouverneur (Wali). Dieser wurde beauftragt, auch die nahe im heutigen Iran gelegene Küstenstadt Tschahbahar zu unterwerfen. In der Zeit der omanischen Herrschaft wurde die Festung in Gwadar errichtet.[4] Der Oman wurde 1891 britisches Protektorat. Gwadar blieb Teil des Oman, als das umliegende Gebiet als Pakistan 1947 die Unabhängigkeit vom Vereinigten Königreich erhielt. Am 8. September 1958 übergab der Oman die Exklave Gwadar an Pakistan, nachdem Aga Khan III. drei Millionen Pfund dafür gezahlt hatte.[4] Gwadar wurde nach einer Übergangsperiode am 1. Juli 1977 Teil der Provinz Belutschistan.',
      description3:
        'In Gwadar herrscht Wüstenklima und es gibt im ganzen Jahr fast keinen Niederschlag (durchschnittliche Jahrestemperatur 26,2 °C, durchschnittlicher Jahresniederschlag 106 mm). Die höchste jemals gemessene Regenmenge innerhalb von 24 Stunden gab es mit 227 mm am 6. Juni 2010 im Gefolge des Zyklons Phet. Die Bevölkerung besteht ganz überwiegend aus Belutschen, die verschiedenen Stämmen angehören (Hoots, Gihckis, Kauhdas, Meers, Kalmati, Dashti und Rind), und die vorherrschende Sprache ist das Belutschische.[3] In Gwadar existiert ein altes Zentrum der ismailitischen Gemeinde. Die Ismailiten spielen eine zentrale Rolle in der Stadt und der lokalen Gesellschaft.',
      gallery: [
        '../../assets/g1.jpg',
        '../../assets/g2.jpg',
        '../../assets/g3.jpg',
        '../../assets/g4.jpg',
        '../../assets/g5.jpeg',
        '../../assets/g6.jpg',
      ],
    },
    {
      id: 5,
      name: 'Karachi',
      province: 'Sindh',
      photo: '../../assets/K0.jpg',
      description1:
        'Karatschi (Urdu كراچى Karācī, Sindhi ڪراچي, englisch Karachi) ist die größte Stadt Pakistans und Hauptstadt der Provinz Sindh; bis 1959 war sie die pakistanische Hauptstadt. Mit 14,9 städtischen Millionen Einwohnern (2017) ist Karatschi eine der größten Städte der Welt. In der Agglomeration leben 19,1 Millionen Menschen (2023).[3] In Pakistan existiert keine Behörde zur Registrierung des Wohnsitzes von Personen; die angegebenen Einwohnerzahlen stellen daher Hochrechnungen auf Basis der Volkszählungsergebnisse dar. Das Verwaltungsgebiet Karatschis ist kein zusammenhängendes Stadtgebiet, sondern – mit seiner außerhalb der Kernstadt dominierenden ländlichen Siedlungsstruktur – eher mit einer kleinen Provinz vergleichbar. Das gesamte Verwaltungsgebiet der Stadt hatte bei der Volkszählung 2023 knapp 20,4 Millionen Einwohner. Die Stadt ist Wirtschafts-, Handels- und Produktionszentrum, Verkehrsknoten, Kulturzentrum mit zahlreichen Universitäten, Hochschulen, Forschungseinrichtungen, Museen, Galerien und Baudenkmälern sowie der größte Hafen des Landes. Eine der bedeutendsten Sehenswürdigkeiten ist Mazar-e-Quaid, das Mausoleum des Begründers von Pakistan, Muhammad Ali Jinnah (1876–1948), der in der Stadt geboren wurde und dort auch begraben ist.',
      description2:
        'Die Stadt befindet sich am Rand der tropischen Klimazone. Die Höchsttemperaturen betragen 35 bis 38 Grad Celsius bei stetigem Wind im Sommer aus Südwest und im Winter aus Nordost und wenig Regen. Die monatlichen Durchschnittstemperaturen schwanken zwischen 19,1 Grad Celsius im Januar und 30,7 Grad Celsius im Juni; die Jahresdurchschnittstemperatur beträgt 26 Grad Celsius. Nur der Monat Juli ist humid, insgesamt fallen nur 167,6 Millimeter Niederschlag im Jahr, da der Süden Pakistans nur noch randlich von den Ausläufern des Sommermonsuns gestreift wird. Der meiste Niederschlag fällt im Monat Juli mit durchschnittlich 66,4 Millimeter, kein Niederschlag fällt im Monat Mai. Auf dem Gebiet der heutigen Stadt lag ursprünglich eine Gruppe kleiner Dörfer einschließlich der Ortschaft Eekalachi-jo-kun und der Festung Manora. Nearchos, Admiral Alexanders des Großen, segelte 326 v. Chr. zum Ende von dessen Eroberungsfeldzug nach Indien zu einem vermutlich an der Stelle Karatschis gelegenen Ort mit Namen Krokola. Als Muhammad ibn al-Qasim im Jahr 712 bis in den Sindh kam, eroberte er die Ortschaft Debul, die wahrscheinlich ebenfalls auf dem heutigen Stadtgebiet von Karatschi lag. Im Jahr 1729 wurde die Siedlung Kolachi-jo-goth („Kolachis Teich“) gegründet, benannt nach einem Fischer aus der Gegend. Aus dem Fischerdorf entwickelte sich bald eine Handelsniederlassung für den Warenaustausch mit Maskat und Bahrain. Die Befestigung bestand aus Erdwällen, die Arbeiter aus Arabien gebaut hatten. Die Kanonen wurden aus Maskat geliefert. Die Siedlung hatte zwei Zugänge, einer mit Blick zum Meer, genannt kharadar („brackiges Tor“), und einer mit Blick zum Lyari-Fluss, genannt mithadar („süßes Tor“). Die erste schriftliche Erwähnung stammt von einem Gesandten Nadir Schahs, der 1742 von seinem Aufenthalt in der Stadt berichtete. 1795 wurde die Stadt vom Khan von Kalat an den Talpur-Herrscher von Sindh übertragen. Karatschi erlangte eine Position als Haupthafen und wurde infolgedessen eine wichtige Stadt.',
      description3:
        'Karatschi besitzt eine vielseitige Industrie. Die Wirtschaft der Stadt konzentriert sich auf Eisengewinnung, Zementwerke, Getreidemühlen und Schiffbau, aber auch Stahl, Textilien, Chemikalien, raffiniertes Erdöl, Schuhe, Maschinen und Nahrungsmittel werden in der Stadt erzeugt. Die Stadt erwirtschaftet 60 Prozent der Steuereinnahmen des Landes und 70 Prozent der Steuern der Provinz Sindh.[28][29] Karatschi ist die reichste Stadt Pakistans und deren wirtschaftliches Zentrum. Das Pro-Kopf-Einkommen ist dort etwa vier- bis fünfmal höher als im Landesdurchschnitt. Der Strand von Clifton in Karatschi befindet sich am Arabischen Meer und bietet zahlreiche Möglichkeiten der Unterhaltung für Familien und Touristen. Dazu gehören unter anderem das Pferde- und Kamelreiten, der Besuch von Freizeitparks und Gaststätten. Suppenschildkröten sind in Hawkesbay Beach zu besichtigen, wenn sie ihre Eier in den von der Sonne erwärmten Sand legen. Cricket ist Nationalsport in Pakistan, und so ist in Karatschi fast ständig ein Spiel zu sehen. Fußball und Hockey werden beim Publikum immer beliebter. Im Stadion und auf vielen anderen Sportplätzen der Stadt kann man sich Spiele ansehen; auch Polo wird viel gespielt. Im Winter werden in Karatschi Pferderennen veranstaltet. Auch Boxkämpfe und Squash finden ein zunehmendes Interesse beim Publikum. Eine der wichtigsten touristischen Sehenswürdigkeiten der Stadt ist Mazar-e-Quaid, das Mausoleum des Begründers von Pakistan, Mohammed Ali Jinnah (1876–1948). Das Gebäude wurde in den 1960er Jahren aus weißem Marmor gebaut. Aus dem umgebenden Park wird das Mausoleum in der Nacht mit starken Scheinwerfern angestrahlt. Zu besonderen Anlässen werden dort Zeremonien abgehalten. Auch besuchen zahlreiche Staatsgäste aus dem Ausland diesen Ort. Dreimal täglich findet eine Wachablösung statt.',
      gallery: [
        '../../assets/k1.jpg',
        '../../assets/k2.jpg',
        '../../assets/k3.jpg',
        '../../assets/k4.jpg',
        '../../assets/k5.jpg',
      ],
    },
    {
      id: 6,
      name: 'Peshawar',
      province: 'Khyper Pakhtunkhwa',
      photo: '../../assets/pes0.jpg',
      description1:
        'Peschawar (Urdu پشاور Pēšāwar, paschtunisch پېښور; von persisch پیشاور, DMG Pīšāwar; englisch Peshawar) [peˈʃaːwɐɾ] Audiodatei abspielen ist die Hauptstadt der pakistanischen Provinz Khyber Pakhtunkhwa mit rund 1.970.000 Einwohnern (Stand: 2017). Vor der Teilung Britisch-Indiens hieß die Stadt Puruschapura, abgeleitet von Sanskrit puruṣa ‚Mann‘ und pura ‚Stadt‘, d. h. ‚Männerstadt‘; oder Puschpapura, was so viel heißt wie „Blütenstadt“, von Sanskrit puṣpa ‚Blüte‘. Peschawar liegt am östlichen Ausgang des Chaiber-Passes.',
      description2:
        'Peschawar wurde vor über 2.000 Jahren von den Königen von Gandhara gegründet und ist seit Jahrhunderten ein Handelszentrum zwischen dem indischen Subkontinent, Afghanistan und Zentralasien. Die Stadt war die östliche Hauptstadt des Kuschanreiches unter Kanischka. Dieser König ließ hier den mit etwa 120 m Höhe damals größten Stupa errichten, der von dem Baumeister Agischala erbaut wurde. Marco Polo besuchte die Stadt 1275. 1530 erbaute Babur, der Gründer des Mogulreiches, eine Festung. Später wurde durch den Bau der Delhi-Kabul-Straße und durch das Anlegen von Gärten unter Sher Khan Suri ein regelrechter Boom Peschawars eingeleitet. Im Jahr 1834 fielen die Sikhs unter Maharadscha Ranjit Singh in Peschawar ein und setzten große Teile der Stadt in Brand. Über 30 Jahre gehörte die Stadt zum Reich der Sikh. Ranjit Singh setzte 1837 den italienischen Abenteurer Paolo Avitabile als Gouverneur ein. Nach dem Zerfall des Sikhreiches wegen Streitigkeiten in der Familie des Maharadschas übernahmen die Briten die Kontrolle über die Stadt. In dieser Zeit war die Stadt Hauptstadt der North West Frontier und eine der größten Garnisonen der Britisch-Indischen Armee. Peschawar ist ein uralter indischer Handels- und Kulturplatz, dessen politische und wirtschaftliche Bedeutung von den Engländern bereits sehr früh erkannt worden war. Lange bevor Großbritannien zu einem Weltreich wurde, bildete die Stadt einen wichtigen Warenumschlagsplatz. Diese Bedeutung wurde durch die Aktivität Londoner Handels- und Wirtschaftsagenten noch wesentlich gesteigert. Bis weit in die erste Hälfte des 20. Jahrhunderts stellte Peschawar in ökonomischer Hinsicht deshalb eine regelrechte Herrschaft über Afghanistan dar. Der überaus größte Teil der afghanischen Einfuhrgüter wurde von hier aus verteilt und ebenso ging der gewaltig überwiegende Prozentsatz der Produkte aus Afghanistan in diese damals indischen Grenzhandelsstätte.',
      description3:
        'Das Museum Peschawar liegt in der Nähe des Bahnhofes. Es enthält eine bedeutende Sammlung von Gandhara-Kunstwerken, darunter das Kanischka-Reliquiar mit punktierten Kharoshthi-Inschriften, ein wertvolles, reliefverziertes Ziergiebelteil aus Schiefer, den Torso eines „fastenden Buddhas“ und den Kopf eines gräko-römischen „Buddhas mit Schnurrbart“. Die Mahabat-Khan-Moschee des 17. Jahrhunderts, benannt nach einem ehemaligen Gouverneur von Peschawar, ist die einzige Moschee aus der Zeit der Mogulkaiser, die die Verwüstungen durch die Sikhs überstanden hat. General Aritabile, Militärberater von Ranjit Singh, benutzte ihr Minarett als Galgen. Das Fort Balahisar wurde 1834 von den Sikhs erbaut und später von den Briten umgebaut. Es wird heute von der pakistanischen Armee genutzt. Auf dem Chowk Yagdar, dem „Platz der Erinnerung“, in dessen Mitte ein Denkmal für die Gefallenen der Indien-Kriege steht, werden nach alter Tradition politische Reden gehalten. Von der Karawanserei Gor Khatri, die von der Tochter Shah Jahans erbaut worden war, steht nur noch das Moghul-Tor. Die Sikhs hatten die Karawanserei zerstört und durch den Gorakhnath- und den Nandi-Tempel ersetzt. Die Khyber-Universität, gegründet 1950, ist eine der ältesten Universitäten in Pakistan und besonders bekannt für ihre medizinischen, sozial- und naturwissenschaftlichen Forschungsabteilungen.',
      gallery: [
        '../../assets/pes1.jpg',
        '../../assets/pes2.jpg',
        '../../assets/pes3.jpg',
        '../../assets/pes4.jpg',
        '../../assets/pes5.jpg',
        '../../assets/pes6.jpg',
        '../../assets/pes0.jpg',
      ],
    },
    {
      id: 7,
      name: 'Gilgit-Baltistan, Azad Jammu & Kashmir',
      province: 'Region Nordpakistan',
      photo: '../../assets/nor1.jpg',
      description1:
        'Gilgit-Baltistan ist eine gebirgige Landschaft im äußersten Norden von Pakistan, die speziell für Trekking- und Expeditionstouristen geeignet ist. Es gibt eine unendliche Anzahl von Wanderwegen, anspruchsvollen Trekkings und spannenden Bergtouren bieten. Doch auch eine Reise auf dem legendären Karakorum-Highway, Nachfolger der Seidenstraße zwischen China und Indien, ist ein fantastisches Erlebnis. Das Gebirge gehört zu den Schroffesten und damit Anmutigsten der Welt und wird durchzogen von reißenden Flüssen und weißen Gletscherhauben. Die besten Reise-Highlights im Gilgit-Baltistan; Das Fort Baltit in Karimabad: Das Fort Baltit liegt im Hunzatal in der Region Gilgit-Baltistan. Heute wird der ehemalige Wohnsitz der Herrscher von Hunza als Museum geführt. Kulturliebhaber kommen in der Region noch weiter auf ihre Kosten: Sei es auf den dem britischen Friedhof von Gilgit oder angesichts der vielen buddhistischen Felszeichnungen. Märchenwiese: Idyllische Almenlandschaft vor der Kulisse der steil abfallenden Wände des Nanga Parbat auf 4000 Metern Höhe inmitten üppiger Nadelwälder. Hier liegt der historischen Platz des Basislagers der deutschen Expeditionen 1932-1953. Das Dorf Tato: Die Siedlung liegt auf 2300 Metern Höhe im Rakhiot Tal und wurde nach einer warmen Quelle in der Nähe benannt. Der Karakorum Highway durch Kohistan: Der Highway führt als Fernstraße durch landschaftlich sehr sehenswertes Gebirge, entlang der Gebirge des Karakorum, Himalaya und teilweise des Hindukusch. Auf pakistanischer Seite verläuft er von Islamabad aus bis nach Hunza an der chinesischen Grenze. Hunzatal: Der Fluss Hunza fließt durch das Tal, das von Obstbäumen wie Aprikosenbäumen, grünen löwenzahnbewachsenen Wiesen gesäumt wird.',
      description2:
        'Das winzige Gebiet Asad Kaschmir im westlichen Himalaya ist seit der Beanspruchung durch Pakistan im Jahr 1947 Zankapfel zwischen Pakistan und Indien, das ebenfalls territoriale Ansprüche auf die Region erhebt. Der nur knapp 12.000 km² große Landstreifen grenzt im Westen an Gilgit-Baltistan und im Süden an den Punjab. Hauptsächlich besteht die teilautonome Provinz aus dem Nilam-Tal und den südlichen Ausläufern des Gebirges. Die Region ist für ihre landschaftliche Schönheit berühmt, doch auch Zeugnisse des Chak-Fürstentums in Muzzafarabad oder die hinduistischen Tempel in Ramkot sind sehenswert. Die Provinz liegt im Einflussbereich beider indischer Monsune: Das heißt, dass im Sommer sehr viel Regen zu erwarten ist, im Winter dagegen Schnee. Der Norden ist dabei von deutlich kälterem Klima geprägt als der Süden von Azad Jammu.',
      description3:
        'Ethnisch bestehen keine Verbindungen zur Region Kashmir in Indien, vielmehr ist die Bevölkerung mit den Menschen aus dem nördlichen Punjab zu vergleichen. Auch hier stellt der Islam die wichtigste Religion. Aufgrund des Wasserreichtums ist die Wasserkraft neben der Landwirtschaft eine der hauptsächlichen Stützen der Wirtschaft. Aufgrund der zahlreichen Berge ist der Landstrich nur sehr dünn besiedelt. Ebenso bedingen die geografischen Besonderheiten eine große ethnische Vielfalt mit etlichen verschiedenen Sprachen, darunter Shina, Balti, Wakhi und andere. Urdu wird von den meisten Leuten verstanden. Das Klima im südöstlichen Baltistan wird noch sehr vom Monsun bestimmt, das Klima des nordwestlichen Gilgit hingegen zeigt eher kontinentale Züge. Die Talorte können im Sommer sehr hohe Temperaturen verzeichnen, generell ist jedoch mit weniger Hitze zu rechnen als in anderen Regionen Pakistans. In den Gebirgen und an den Gipfeln können natürlich jederzeit kühlere Temperaturen vorkommen – die Monate Juni bis September sind für Bergaktivitäten ideal. ',
      gallery: [
        '../../assets/nor2.jpg',
        '../../assets/nor3.jpg',
        '../../assets/nor4.jpg',
        '../../assets/nor5.jpg',
        '../../assets/nor6.jpg',
        '../../assets/nor7.jpg',
        '../../assets/nor8.jpg',
        '../../assets/nor9.jpg',
        '../../assets/nor1.jpg',
      ],
    },
  ];

  getAllCities(): Cities[] {
    return this.cities1;
  }

  getGallery(id: number) {
    return this.cities1[id].gallery;
  }

  getCitiesById(id: number): Cities | undefined {
    return this.cities1.find((cities) => cities.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Booking application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
