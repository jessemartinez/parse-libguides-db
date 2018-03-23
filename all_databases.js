var db_full_names = [
	'aadr.alexanderstreet.com',
	'abcas3.auditedmedia.com/micenter/micenter',
	'academic.mintel.com',
	'access.newspaperarchive.com',
	'access.vault.com/career-insider-login.aspx?aid=148188',
	'acta.chadwyck.com',
	'afi.chadwyck.com',
	'amadeus.bvdinfo.com/ip',
	'analyticscampus.gallup.com/?ref=auth',
	'ancestrylibrary.proquest.com',
	'anthrosource.onlinelibrary.wiley.com',
	'apps.brepolis.net/brepolisportal/default.aspx',
	'apps.brepolis.net/dhge/test/default2.aspx',
	'apps.brepolis.net/lexiema/test/default2.aspx',
	'apps.intelligize.com',
	'archive.irishnewsarchive.com/olive/apa/ina.edu/default.aspx#panel=home',
	'archives.chadwyck.com',
	'artfl-project.uchicago.edu/content/tfa',
	'asp6new.alexanderstreet.com/orhi',
	'asp6new.alexanderstreet.com/sixt',
	'asp6new.alexanderstreet.com/was2/was2.index.map.aspx',
	'atho.alexanderstreet.com',
	'bap.chadwyck.com',
	'bc.app.movie-discovery.com',
	'bc.kanopystreaming.com',
	'bc.policymap.com/maps',
	'bldr.alexanderstreet.com',
	'bltc.alexanderstreet.com',
	'blww.alexanderstreet.com',
	'bostoncollege.naxosmusiclibrary.com',
	'bostoncollege.naxosmusiclibrary.com/world',
	'brecht.chadwyck.com/deutsch/frames/home/home',
	'bsc.chadwyck.com',
	'bwld.alexanderstreet.com',
	'cali.alexanderstreet.com',
	'classic.accountingresearchmanager.com/wk/rm.nsf/arm.html?open',
	'clients1.ibisworld.com',
	'clt.brepolis.net/acll/default.aspx',
	'clt.brepolis.net/dld/default.aspx',
	'clt.brepolis.net/emgh/pages/search.aspx',
	'cognet.mit.edu',
	'collections.chadwyck.com/bie/htxview?template=basic.htx&content=frameset.htx',
	'collections.chadwyck.com/eas/htxview?template=basic.htx&content=frameset.htx',
	'collections.chadwyck.com/home/home_20aap.jsp',
	'collections.chadwyck.com/home/home_20ap.jsp',
	'collections.chadwyck.com/home/home_20ep.jsp',
	'collections.chadwyck.com/home/home_aap.jsp',
	'collections.chadwyck.com/home/home_abell.jsp',
	'collections.chadwyck.com/home/home_ad.jsp',
	'collections.chadwyck.com/home/home_ap.jsp',
	'collections.chadwyck.com/home/home_bal.jsp',
	'collections.chadwyck.com/home/home_c18f.jsp',
	'collections.chadwyck.com/home/home_c19f.jsp',
	'collections.chadwyck.com/home/home_cp.jsp',
	'collections.chadwyck.com/home/home_eaf2.jsp',
	'collections.chadwyck.com/home/home_ed.jsp',
	'collections.chadwyck.com/home/home_eepf.jsp',
	'collections.chadwyck.com/home/home_ep.jsp',
	'collections.chadwyck.com/home/home_ep2.jsp',
	'collections.chadwyck.com/home/home_fpl.jsp',
	'collections.chadwyck.com/home/home_kjb.jsp',
	'collections.chadwyck.com/yeats/htxview?template=basic.htx&content=frameset.htx',
	'colonial.chadwyck.com',
	'congressional.proquest.com/congressional/search/advanced/advanced?accountid=9673',
	'connect.jbiconnectplus.org',
	'cpps.brepolis.net/aph/search.cfm',
	'cpps.brepolis.net/bbih/search.cfm?',
	'cpps.brepolis.net/bmb/search.cfm',
	'cwld.alexanderstreet.com',
	'databank.worldbank.org/data/views/variableselection/selectvariables.aspx?source=education-statistics',
	'databank.worldbank.org/data/views/variableselection/selectvariables.aspx?source=gender-statistics',
	'databank.worldbank.org/data/views/variableselection/selectvariables.aspx?source=health-nutrition-and-population-statistics',
	'databank.worldbank.org/data/views/variableselection/selectvariables.aspx?source=world-development-indicators',
	'dbpo.chadwyck.com',
	'demographics.geolytics.com/ncdb2010/default.aspx',
	'demographics.geolytics.com/sf32000/preloginform.aspx',
	'dgr.rints.com',
	'dib.cambridge.org',
	'dictionaries.brillonline.com',
	'dictionaries.brillonline.com/montanari',
	'digital.scholastic.com/site/launch/bkflix?ucn=600006151',
	'digitalmicrofilm.proquest.com',
	'dl.acm.org',
	'dlcr.alexanderstreet.com',
	'dlib.eastview.com/browse/books/1670',
	'dlib.eastview.com/browse/publication/18406',
	'dlib.eastview.com/browse/udb/350',
	'dlib.eastview.com/sources/publication.jsp?id=21366',
	'dramaonlinelibrary.com',
	'earlyrepublic.press.jhu.edu/index.html',
	'eas-ref.press.jhu.edu/index.html',
	'ebooks.cambridge.org/ebook.jsf?bid=cbo9781139043182',
	'edu.adspender.kantarmediana.com',
	'edu.medici.tv/en',
	'eebo.chadwyck.com/home',
	'eena.alexanderstreet.com',
	'efts.lib.uchicago.edu/efts/voltaire/restricted/search.form.html',
	'elibrary.worldbank.org',
	'esgdirect.msci.com',
	'estc.bl.uk',
	'ets.umdl.umich.edu/m/mec',
	'fconline.foundationcenter.org/ipl.php',
	'fiaf.chadwyck.com/search/initindexsearch.do',
	'fii.chadwyck.com/home',
	'find.galegroup.com/bgmi/infomark.do?page=basicsearch&usergroupname=mlin_m_bostcoll&prodid=bgmi&type=static&version=1.0&source=gale',
	'find.galegroup.com/ecco/start.do?prodid=ecco&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gdl/infomark.do?serquery=locale(en%2c%2c)%3afqe%3d(jx%2cnone%2c23)%22market+share+reporter%22%24&querytype=ph&cpubvalue=0ked&tabid=t045&usergroupname=mlin_m_bostcoll&prodid=gdl&currentposition=1&type=pubissues&version=1.0&source=gale',
	'find.galegroup.com/gdl/infomark.do?serquery=locale(en%2c%2c)%3afqe%3d(jx%2cnone%2c26)%22business+rankings+annual%22%24&querytype=ph&cpubvalue=0htt&tabid=t041&usergroupname=mlin_m_bostcoll&prodid=gdl&currentposition=1&type=pubissues&version=1.0&source=gale',
	'find.galegroup.com/gdl/infomark.do?serquery=locale(en,,):fqe=(jx,none,0)$&querytype=ph&type=pubissues&tabid=t023&cpubvalue=2mox&prodid=gdl&currentposition=1&version=1.0&source=gale&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gdl/infomark.do?serquery=locale(en,,):fqe=(jx,none,0)$&querytype=ph&type=pubissues&tabid=t024&cpubvalue=2moz&prodid=gdl&currentposition=1&version=1.0&source=gale&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gtx/start.do?prodid=itof&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gvrl/start.do?prodid=gvrl.bphandbooks&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gvrl/start.do?prodid=gvrl.encyj&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gvrl/start.do?prodid=gvrl.ncec&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gvrl/start.do?prodid=gvrl.seal&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/gvrl/start.do?prodid=gvrl.wealen&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/iln/start.do?prodid=iln&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/itx/start.do?prodid=aone&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/menu/start?prod=bri&usergroupname=mlin_m_bostcoll',
	'find.galegroup.com/menu/start?usergroupname=mlin_m_bostcoll&prod=ncco',
	'find.galegroup.com/pnch/start.do?prodid=pnch&usergroupname=mlin_m_bostcoll',
	'fmwww.bc.edu/vdc/db/dbdot1a.php',
	'fod.infobase.com/portalplaylists.aspx?wid=95406',
	'galenet.galegroup.com/servlet//ebooks?ste=22&docnum=cx3045399999&q=mlin_m_bostcoll',
	'galenet.galegroup.com/servlet//ebooks?ste=22&docnum=cx3424399999&q=mlin_m_bostcoll',
	'galenet.galegroup.com/servlet/hwrc?locid=mlin_m_bostcoll',
	'gateway.ovid.com/ovidweb.cgi?t=js&mode=ovid&news=n&page=main&d=hapi',
	'gateway.proquest.com/openurl?rft_id=44973&res_dat=xri%3apqm&rft_val_fmt=info%3aofi%2ffmt%3akev%3amtx%3ajournal&url_ver=z39.88-2004&genre=journal&req_dat=xri%3apqil%3aclntid%3d9673',
	'gdc.galegroup.com/gdc/artemis?p=ahsi&u=mlin_m_bostcoll',
	'gdc.galegroup.com/gdc/artemis?p=eapb&u=mlin_m_bostcoll',
	'gdc.galegroup.com/gdc/artemis?p=usdd&u=mlin_m_bostcoll',
	'gerritsen.chadwyck.com',
	'global.factiva.com/en/sess/login.asp?xsid=s00yczpyszymtzymtapm9qmmdaroxmm5dfhy96oyqzlnffbqufbqufbqufbqufbqufbqufbqufbqufbqufbqufbqufb',
	'glossary.agiweb.org/dbtw-wpd/glossary/login.aspx',
	'go.galegroup.com/gdsc/i.do?id=3tqb&v=2.1&u=mlin_m_bostcoll&it=aboutcollections&p=gdsc&sw=w',
	'go.galegroup.com/gdsc/i.do?id=3xnn&v=2.1&u=mlin_m_bostcoll&it=aboutcollections&p=gdsc&sw=w',
	'go.galegroup.com/gdsc/i.do?id=4mtp&v=2.1&u=mlin_m_bostcoll&it=aboutcollections&p=gdsc&sw=w',
	'go.galegroup.com/gdsc/i.do?id=6tjk&v=2.1&u=mlin_m_bostcoll&it=aboutcollections&p=gdsc&sw=w',
	'go.galegroup.com/gdsc/start.do?p=gdsc&u=mlin_m_bostcoll&authcount=1',
	'go.galegroup.com/ps/i.do?v=2.1&u=mlin_m_bostcoll&pg=advancedsearch&it=static&p=gvrl.eb01&sw=w',
	'go.galegroup.com/ps/i.do?v=2.1&u=mlin_m_bostcoll&pg=advancedsearch&it=static&p=itbc&sw=w',
	'go.galegroup.com/ps/start.do?p=itke&u=mlin_m_bostcoll&authcount=1',
	'go.galegroup.com/ps/start.do?p=msic&u=mlin_m_bostcoll&authcount=1',
	'go.galegroup.com/ps/start.do?p=prof&u=mlin_m_bostcoll&authcount=1',
	'go.galegroup.com/ps/start.do?p=stom&u=mlin_m_bostcoll&authcount=1',
	'go.galegroup.com/ps?p=gvrl.0hny&u=mlin_m_bostcoll',
	'goethe.chadwyck.com',
	'gtionline.foundationcenter.org',
	'hanchi.ihp.sinica.edu.tw/ihp/hanji.htm#',
	'hapi.ucla.edu',
	'hbcponline.com',
	'history.paratext.com',
	'hsus.cambridge.org/hsusweb',
	'humanities.uchicago.edu/artfl',
	'ic.galegroup.com/ic/bic1?usergroupname=mlin_m_bostcoll',
	'ic.galegroup.com/ic/gic/?p=gic%3aovic&u=mlin_m_bostcoll',
	'ica.princeton.edu',
	'icsd.fiz-karlsruhe.de/icsd',
	'ieeexplore.ieee.org/xpl/prodlist.jsp?product=&publicationtype=conference&startletter=a',
	'imld.alexanderstreet.com',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=ahsi&id=boston',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=bncn',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=dlbc',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=gld-1',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=hrca',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=lco',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=litrc',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=lt',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=mlfp',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=mmlf',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=mmlp',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=mmlt',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=mome',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=moml',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=ngma',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=noie',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=sata',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=scrb',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=tlsh',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=ttda',
	'infotrac.galegroup.com/itweb/mlin_m_bostcoll?db=wmns&id=boston',
	'infoweb.newsbank.com/?db=aspa&s_startsearch=customized',
	'infoweb.newsbank.com/?db=eaix',
	'infoweb.newsbank.com/?db=eana',
	'infoweb.newsbank.com/?db=eanx',
	'infoweb.newsbank.com/?db=eanx&d_collections=eanacn',
	'infoweb.newsbank.com/?db=evan&s_startsearch=customized',
	'infoweb.newsbank.com/?db=fbisx',
	'infoweb.newsbank.com/?db=hsja',
	'infoweb.newsbank.com/?db=seja',
	'infoweb.newsbank.com/?db=serial',
	'infoweb.newsbank.com/?db=shaw&s_startsearch=customized',
	'infoweb.newsbank.com/?db=ssmap',
	'infoweb.newsbank.com/?db=unab',
	'infoweb.newsbank.com/apps/readex/advanced?p=topapart&f=advanced',
	'infoweb.newsbank.com/apps/readex/advanced?p=topcold&f=advanced',
	'infoweb.newsbank.com/apps/readex/advanced?p=topimm&f=advanced',
	'infoweb.newsbank.com/apps/readex/advanced?p=toprace&f=advanced',
	'infoweb.newsbank.com/resources/?p=awnb',
	'infoweb.newsbank.com/resources/search/nb?p=worldnews&t=favorite%3abh%21boston%2bherald%2bhistorical%2band%2bcurrent',
	'infoweb.newsbank.com?db=whnpx&d_collections=whnplan1',
	'isiknowledge.com/biosis',
	'isiknowledge.com/ccc',
	'isiknowledge.com/diidw',
	'isiknowledge.com/drci',
	'isiknowledge.com/inspec',
	'isiknowledge.com/wos',
	'isiknowledge.com/zoorec',
	'iwrp.alexanderstreet.com',
	'jcr.incites.thomsonreuters.com',
	'kafka.chadwyck.com',
	'kll-online.de',
	'knowledge.sagepub.com/view/communicationtheory/sage.xml',
	'laww.alexanderstreet.com',
	'lb.brillonline.nl',
	'leme.library.utoronto.ca/search',
	'libguides.bc.edu/chant',
	'libguides.bc.edu/prowessdx',
	'library.artstor.org/library/welcome.html',
	'library.cqpress.com/congress',
	'library.cqpress.com/cqalmanac',
	'library.cqpress.com/cqresearcher',
	'library.cqpress.com/cqweekly',
	'library.cqpress.com/elections',
	'library.cqpress.com/historicdocuments',
	'library.cqpress.com/phw',
	'library.cqpress.com/pia',
	'library.cqpress.com/scc',
	'library.cqpress.com/statestats',
	'library.nlx.com',
	'link.springer.com',
	'link.springer.com/referencework/10.1007/978-1-349-58802-2',
	'literature.proquest.com/?accountid=9673',
	'litguide.press.jhu.edu',
	'luther.chadwyck.com',
	'materials.springer.com',
	'mathscinet.ams.org/mathscinet',
	'metasearch.opinionarchives.com/advanced.html',
	'methods.sagepub.com/cases',
	'methods.sagepub.com/datasets',
	'methods.sagepub.com/search',
	'metopera.org/season/on-demand/?',
	'microform.digital/boa/collections/11/america-in-records-from-colonial-missionaries-1635-1928',
	'microform.digital/boa/search?facettopic=tradeinpeople',
	'microform.digital/boa/search?facettopic=tww',
	'mio.asminternational.org/apd',
	'moneyline.cq.com/pml/home.do',
	'monthlycatalog.chadwyck.com',
	'moto.alexanderstreet.com',
	'mrw.interscience.wiley.com/emrw/9780470682531/patai/toc',
	'muse.jhu.edu',
	'myinsight.globalinsight.com/servlet/cats?imask=1&pagecontent=home',
	'na.capitaliq.com/ip/bosto',
	'nano.nature.com',
	'newfirstsearch.oclc.org/autho=100105433&dbname=worldcat&done=referer&fsip',
	'news.siteintelgroup.com',
	'next.srds.com',
	'ntrl.ntis.gov',
	'nwld.alexanderstreet.com',
	'online.epocrates.com/noframe',
	'online.goinglobal.com',
	'online.ibfd.org/kbase',
	'online.infobaselearning.com/direct.aspx?aid=95406&pid=we00',
	'online.liverpooluniversitypress.co.uk/series/tthe',
	'onlinelibrary.wiley.com',
	'onlinelibrary.wiley.com/book/10.1002/0470848944',
	'onlinelibrary.wiley.com/book/10.1002/047120918x',
	'onlinelibrary.wiley.com/book/10.1002/0471264180',
	'onlinelibrary.wiley.com/book/10.1002/9780470671153/toc',
	'onlinelibrary.wiley.com/book/10.1002/9781118829059/toc',
	'onlinelibrary.wiley.com/book/10.1002/9781444351071',
	'onlinelibrary.wiley.com/book/10.1107/97809553602060000001',
	'onlinelibrary.wiley.com/mrw/advanced/search?doi=10.1002/047001590x',
	'onlinelibrary.wiley.com/mrw/advanced/search?doi=10.1002/0471238961',
	'oversea.cnki.net',
	'ovidsp.ovid.com/ovidweb.cgi?t=js&mode=ovid&page=main&news=n&d=pmoz',
	'ovidsp.ovid.com/ovidweb.cgi?t=js&news=n&csc=y&page=main&d=jbi',
	'papers.nber.org/papers',
	'parkerweb.stanford.edu',
	'parlipapers.proquest.com/profiles/hcpp/search/advanced/hcppadvanced?accountid=9673',
	'phaseonline.ceramics.org',
	'philpapers.org',
	'pld.chadwyck.com',
	'pm.nlx.com',
	'poll.orspub.com/poll/lpext.dll?f=templates&fn=main-h.htm',
	'primarysources.brillonline.com/advanced-search?collection=latin-american-anarchist-periodicals',
	'primarysources.brillonline.com/browse/moses-maimonides-unparalleled-editions',
	'primarysources.brillonline.com/browse/us-intelligence-on-the-middle-east',
	'projecteuclid.org',
	'proquestcombo.safaribooksonline.com',
	'pubs.acs.org/about.html',
	'pubs.rsc.org',
	'purl.org/reltech/migne',
	'quod.lib.umich.edu/a/acls/browse.html',
	'readyreference.data-planet.com',
	'reference.paratext.com',
	'referenceworks.brillonline.com/browse/brockelmann',
	'referenceworks.brillonline.com/browse/christian-muslim-relations-i',
	'referenceworks.brillonline.com/browse/christian-muslim-relations-ii',
	'referenceworks.brillonline.com/browse/encyclopaedia-islamica',
	'referenceworks.brillonline.com/browse/encyclopaedia-of-islam-2',
	'referenceworks.brillonline.com/browse/encyclopaedia-of-islam-3',
	'referenceworks.brillonline.com/browse/encyclopaedia-of-judaism',
	'referenceworks.brillonline.com/browse/encyclopaedia-of-the-neo-latin-world',
	'referenceworks.brillonline.com/browse/encyclopaedia-of-the-quran',
	'referenceworks.brillonline.com/browse/encyclopedia-of-arabic-language-and-linguistics',
	'referenceworks.brillonline.com/browse/encyclopedia-of-early-modern-history-online',
	'referenceworks.brillonline.com/browse/encyclopedia-of-jews-in-the-islamic-world',
	'referenceworks.brillonline.com/browse/encyclopedia-of-law-and-religion',
	'referenceworks.brillonline.com/browse/encyclopedia-of-women-and-islamic-cultures',
	'referenceworks.brillonline.com/browse/gregorii-nysseni-opera',
	'referenceworks.brillonline.com/browse/jesuit-historiography-online',
	'referenceworks.brillonline.com/browse/religion-past-and-present',
	'referenceworks.brillonline.com/cluster/new%20pauly%20online',
	'religion.oxfordre.com',
	'research.valueline.com/secure/research',
	'ropercenter.cornell.edu',
	'rotunda.upress.virginia.edu/arnold',
	'rotunda.upress.virginia.edu/crossetti',
	'rotunda.upress.virginia.edu/dmde',
	'rotunda.upress.virginia.edu/edc',
	'rotunda.upress.virginia.edu/founders/adms.html',
	'rotunda.upress.virginia.edu/founders/arhn.html',
	'rotunda.upress.virginia.edu/founders/fgea.html',
	'rotunda.upress.virginia.edu/founders/gewn.html',
	'rotunda.upress.virginia.edu/founders/jsmn.html',
	'rotunda.upress.virginia.edu/founders/rncn',
	'rotunda.upress.virginia.edu/founders/tsjn.html',
	'rotunda.upress.virginia.edu/pinckneyhorry',
	'schiller.chadwyck.com',
	'school.eb.com/levels',
	'search.alexanderstreet.com/afso',
	'search.alexanderstreet.com/ativ',
	'search.alexanderstreet.com/blsv',
	'search.alexanderstreet.com/bord',
	'search.alexanderstreet.com/counseling-therapy',
	'search.alexanderstreet.com/daiv',
	'search.alexanderstreet.com/ediv',
	'search.alexanderstreet.com/glnd',
	'search.alexanderstreet.com/huri',
	'search.alexanderstreet.com/meet',
	'search.alexanderstreet.com/music-performing-arts',
	'search.alexanderstreet.com/opiv',
	'search.alexanderstreet.com/wasg',
	'search.alexanderstreet.com/wasi',
	'search.alexanderstreet.com/wnrv',
	'search.eb.com',
	'search.ebscohost.com/login.asp?profile=ahw',
	'search.ebscohost.com/login.asp?profile=religion&defaultdb=lsdar',
	'search.ebscohost.com/login.asp?profile=web&defaultdb=bwh',
	'search.ebscohost.com/login.aspx?authtype=cookie,ip,uid&profile=advance&defaultdb=ahl',
	'search.ebscohost.com/login.aspx?authtype=cookie,ip,uid&profile=advance&defaultdb=hia',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&custid=s4194587&profile=ehost&defaultdb=apd,ane,apm,afp,alm,bqp,bgp,tpp,bsj,bsi,cap,clp,csp,cos,cpp,cps,cep,dap,amr,fcf,flp,gic,hss,lpn,msp,mle,mcp,mpe,pfa,paw,pbe,eup,rpw,rpf,scp,sla,sdd,ssp,tpa,bsk,wpe,wpd,wpn,ald,alt,amp,app,acw,aml,asp&groupid=main&scope=site',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=advance&defaultdb=fqh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=advance&defaultdb=oah',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=advance&defaultdb=vah',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=bsi',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=cin&defaultdb=jlh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=33h',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=8gh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=air',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=ant',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=apn&defaultdb=alr',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=asu',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=bas',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=brd,brr',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=cax&defaultdb=ufh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=egi',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=eir',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=fxh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=fyh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=gnh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=h6a',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=h7h&defaultdb=h8h',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=hjh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=hsr',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=ich',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=ijh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=jph',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=llf',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=loh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=lpb&defaultdb=lpr',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=lxh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=pix',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=qth',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=rgr',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=rih',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=rvh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=sbh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=sph',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=ssx',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=ehost&defaultdb=swh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=erc&defaultdb=ehh',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=novelistk8',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=religion&defaultdb=pif',
	'search.ebscohost.com/login.aspx?authtype=ip,uid&profile=srchall&defaultdb=bpr',
	'search.epnet.com/login.asp?profile=web&defaultdb=mah',
	'search.itergateway.org/iter/search.jsp',
	'search.marquiswhoswho.com',
	'search.proquest.com/advanced?accountid=9673&selectids=1005629,1007871',
	'search.proquest.com/advanced?accountid=9673&selectids=1005629,1007871,1007272,1006744,1006151,1007155,1007154,1006359,1005877,1006360',
	'search.proquest.com/advanced?accountid=9673&selectids=1007603,1007604',
	'search.proquest.com/agricenvironm/advanced/science/fromdatabaseslayer?accountid=9673',
	'search.proquest.com/altpresswatch/advanced?accountid=9673',
	'search.proquest.com/americanperiodicals/advanced?accountid=9673',
	'search.proquest.com/artbibliographies/advanced?',
	'search.proquest.com/artshumanities/advanced?accountid=9673',
	'search.proquest.com/asfa/science/fromdatabaseslayer?accountid=9673',
	'search.proquest.com/assia/advanced?',
	'search.proquest.com/avery/advanced?',
	'search.proquest.com/bhi/advanced?',
	'search.proquest.com/biologicalsciences/advanced?accountid=9673',
	'search.proquest.com/ble/advanced?accountid=9673',
	'search.proquest.com/britishnursingindex/advanced?accountid=9673',
	'search.proquest.com/britishperiodicals/advanced?accountid=9673',
	'search.proquest.com/criminaljusticeperiodicals/advanced?accountid=9673',
	'search.proquest.com/daai/advanced?',
	'search.proquest.com/dnsa/advanced?accountid=9673',
	'search.proquest.com/earthatmosphericaquatic/advanced/science/fromdatabaseslayer?accountid=9673',
	'search.proquest.com/econlit/advanced?',
	'search.proquest.com/education/advanced?accountid=9673',
	'search.proquest.com/eric/advanced?accountid=9673',
	'search.proquest.com/ethnicnewswatch/advanced?accountid=9673',
	'search.proquest.com/genderwatch/advanced?accountid=9673',
	'search.proquest.com/globalnews/embedded/sv46nqy98qsi5agf?_ga=2.24403762.927166705.1519997644-1600456357.1519997644',
	'search.proquest.com/harpersbazaar/advanced/arts/fromdatabaseslayer?accountid=9673',
	'search.proquest.com/histvault?q=395:000579',
	'search.proquest.com/histvault?q=48990:001738',
	'search.proquest.com/histvault?q=91549:001475',
	'search.proquest.com/hnpatlantaconstitution2/advanced?accountid=9673',
	'search.proquest.com/hnpchicagodefender/advanced?accountid=9673',
	'search.proquest.com/hnpchicagotribune/advanced?accountid=9673',
	'search.proquest.com/hnpchristiansciencemonitor/advanced?accountid=9673',
	'search.proquest.com/hnpglobeandmail?accountid=9673',
	'search.proquest.com/hnpguardianobserver/advanced/?accountid=9673',
	'search.proquest.com/hnpirishtimes/advanced?accountid=9673',
	'search.proquest.com/hnplatimes?accountid=9673',
	'search.proquest.com/hnpnewamsterdamnews/advanced?accountid=9673',
	'search.proquest.com/hnpnewyorktimes/advanced?accountid=9673',
	'search.proquest.com/hnpscotsman/advanced?accountid=9673',
	'search.proquest.com/hnptimesofindia/advanced?accountid=9673',
	'search.proquest.com/hnpwallstreetjournal/advanced?accountid=9673',
	'search.proquest.com/hnpwashingtonpost/advanced?accountid=9673',
	'search.proquest.com/iba/advanced?accountid=9673',
	'search.proquest.com/ibss/advanced?accountid=9673',
	'search.proquest.com/iimp/advanced?accountid=9673',
	'search.proquest.com/iipa/advanced?accountid=9673',
	'search.proquest.com/llba/advanced?accountid=9673',
	'search.proquest.com/mga/science/fromdatabaseslayer',
	'search.proquest.com/mlaib/advanced?',
	'search.proquest.com/naturalscience/advanced/science/fromdatabaseslayer?accountid=9673',
	'search.proquest.com/oceanic/advanced?',
	'search.proquest.com/pais/advanced?',
	'search.proquest.com/pao/advanced?accountid=9673',
	'search.proquest.com/physicaleducation/advanced?',
	'search.proquest.com/pilots/advanced?',
	'search.proquest.com/pio/advanced?accountid=9673',
	'search.proquest.com/policyfile/advanced?accountid=9673',
	'search.proquest.com/politicalscience/advanced?accountid=9673',
	'search.proquest.com/pqdtglobal/advanced?accountid=9673',
	'search.proquest.com/psycarticles/advanced?accountid=9673',
	'search.proquest.com/psycbooks/advanced?',
	'search.proquest.com/psycinfo/advanced?',
	'search.proquest.com/psyctests/advanced?accountid=9673',
	'search.proquest.com/socabs/advanced?',
	'search.proquest.com/socialservices/advanced?',
	'search.proquest.com/sociology/advanced?accountid=9673',
	'search.proquest.com/socscijournals/advanced?accountid=9673',
	'search.proquest.com/toxline/advanced?accountid=9673',
	'search.proquest.com/usmajordailies/embedded/sv46nqy98qsi5agf?_ga=2.237868168.927166705.1519997644-1600456357.1519997644',
	'search.proquest.com/vogue/advanced?accountid=9673',
	'search.proquest.com/wma?accountid=9673',
	'search.proquest.com/wpsa/advanced?accountid=9673',
	'search.proquest.com/wwd/advanced?accountid=9673',
	'shmu.alexanderstreet.com',
	'sk.sagepub.com/cases',
	'sk.sagepub.com/reference/humanrelationships',
	'sk.sagepub.com/reference/journalism',
	'sk.sagepub.com/search',
	'sk.sagepub.com/search/savedsearch/280',
	'sk.sagepub.com/video/business-management',
	'solomon.dkbl.alexanderstreet.com',
	'solomon.tcpt.alexanderstreet.com',
	'stat.unido.org',
	'statabs.proquest.com/sa/index.html?accountid=9673',
	'statistical.proquest.com/statisticalinsight/search/advanced/si?accountid=9673&groupid=107819',
	'statisticaldatasets.data-planet.com/dataplanet',
	'statisticaldatasets.data-planet.com/dataplanet?open=bop',
	'statisticaldatasets.data-planet.com/dataplanet?open=dot',
	'statisticaldatasets.data-planet.com/dataplanet?open=ifs',
	'stephanus.tlg.uci.edu/iris/inst/csearch.jsp',
	'swrp.alexanderstreet.com',
	'syrano.demarque.com/access/connext.php?idrelpc=372596',
	'tapor.library.utoronto.ca/doe',
	'tapor.library.utoronto.ca/doecorpus',
	'teso.chadwyck.com/home/home',
	'totalaccess.emarketer.com/extranet.aspx?bostoncollege',
	'trials.proquest.com/trials/trialsummary.action?view=subject&trialbean.token=csrde8xxjivge9gv69un',
	'tvnews.vanderbilt.edu',
	'universitypublishingonline.org/cambridge/benjonson',
	'universitypublishingonline.org/cambridge/companions',
	'universitypublishingonline.org/cambridge/companions/browse_by_collection.jsf?collectiontitle=companions+to+music&subproductgroupcode=mus&tsort=title+closed&asort=author+default_list&ysort=year+default_list',
	'universitypublishingonline.org/cambridge/histories',
	'universitypublishingonline.org/cambridge/histories/subject_title_list.jsf?subjectcode=09&heading=music&tsort=title+closed&asort=author+default_list&ysort=year+default_list',
	'voices.revealdigital.com',
	'web.lexis-nexis.com/stcapuniv',
	'webcsd.ccdc.cam.ac.uk',
	'webofknowledge.com/?destapp=wos&editions=ahci',
	'webofknowledge.com/?destapp=wos&editions=isshp',
	'webofknowledge.com/?destapp=wos&editions=istp',
	'webofknowledge.com/?destapp=wos&editions=sci',
	'webofknowledge.com/?destapp=wos&editions=ssci',
	'wellesley.chadwyck.com',
	'wnc.eastview.com',
	'worldchristiandatabase.org/wcd',
	'wrds-web.wharton.upenn.edu/wrds/query_forms/navigation.cfm?navid=336',
	'www.18thcjournals.amdigital.co.uk',
	'www.aapredbook.org',
	'www.academic.marketresearch.com',
	'www.accessible-archives.com/collections/african-american-newspapers',
	'www.accessible.com/accessible/brand?mpthe+lily=on&mpnational+citizen+and+ballot+box=on&mpthe+revolution=on',
	'www.accessscience.com',
	'www.airitilibrary.com/search/aljnlbrowse',
	'www.alacra.com/cgi-bin/eiusite.exe?app=eiusite&msg=execcontent&topic=defaultscreen/exlibris/metalib/m4_1/product=17',
	'www.anb.org/articles/index.html',
	'www.archivesdirect.amdigital.co.uk/cp_middleeast',
	'www.archivesdirect.amdigital.co.uk/fo_india',
	'www.archivesdirect.amdigital.co.uk/fo_japan',
	'www.archivesdirect.amdigital.co.uk/fo_middleeast',
	'www.askart.com',
	'www.balkaninsight.com/en/page/all-balkans-home',
	'www.bc.edu/content/dam/files/schools/law_sites/library/html/bna/alpha.html',
	'www.bdsl-online.de',
	'www.beckettarchive.org',
	'www.bibliorossica.com',
	'www.biocyc.org',
	'www.blackwellreference.com',
	'www.booksinprint.com',
	'www.brepolis.net',
	'www.brepolsonline.net',
	'www.bridgemaneducation.com',
	'www.britishonlinearchives.co.uk/collection.php?cid=9781851171248&sid=&keywords=',
	'www.britishonlinearchives.co.uk/collection.php?cid=9781851171385&pid=&did=&cat=&sid=boabbc&date_option=equal',
	'www.buddhism-dict.net/ddb',
	'www.cabells.com',
	'www.cepr.org/content/discussion-papers',
	'www.chicagomanualofstyle.org/home.html',
	'www.china.amdigital.co.uk',
	'www.churchillarchive.com',
	'www.ciaonet.org',
	'www.cios.org',
	'www.classiques-garnier.com/numerique-bases/grammaires',
	'www.classiques-garnier.com/numerique-bases/index.php?module=app&action=framemain&colname=colbasile',
	'www.clcd.com/#/advancedsearch',
	'www.cochranelibrary.com',
	'www.collegesource.org',
	'www.colonialamerica.amdigital.co.uk',
	'www.communicationencyclopedia.com',
	'www.computingreviews.com',
	'www.conference-board.org/ea/index.cfm',
	'www.corporateaffiliations.com/executable/cn_quicksearch.asp',
	'www.crl.edu/content.asp?l1=5&l2=23&l3=41',
	'www.daredictionary.com',
	'www.degruyter.com/databasecontent?dbid=ebr&dbsource=%2fdb%2febr',
	'www.digitaltheatreplus.com',
	'www.digizeitschriften.de',
	'www.duxiu.com/login.jsp',
	'www.e-enlightenment.com',
	'www.eastview.com/online/sikudownload',
	'www.eduref.org',
	'www.embase.com',
	'www.emeraldinsight.com/search/advanced',
	'www.emis.com/php/dashboard/index',
	'www.empire.amdigital.co.uk',
	'www.englishhistoricaldocuments.com',
	'www.ethnologue.com/browse/names',
	'www.europeanamericana.com',
	'www.foreignaffairs.com',
	'www.foreignlawguide.com/ip',
	'www.geoscienceworld.org',
	'www.globalcommodities.amdigital.co.uk',
	'www.guidestar.org',
	'www.heinonline.org/hol/index?collection=iflp',
	'www.heinonline.org/hol/welcome',
	'www.hstalks.com/business',
	'www.icpsr.umich.edu',
	'www.ieee.org/ieeexplore',
	'www.ingentaconnect.com',
	'www.ingentaconnect.com/content/mmso',
	'www.iop.org/ej/search',
	'www.irishbooksearch.com/index.php?signin=y',
	'www.issgovernance.com/solutions/iss-analytics/iss-incentive-lab',
	'www.jstor.org/action/showadvancedsearch',
	'www.jstor.org/action/showjournals?browsetype=collectioninfopage&selectcollection=ireland',
	'www.jstor.org/sustainability',
	'www.kluwerlawonline.com/toc.php?area=looseleafs&mode=bypub&level=4&values=looseleafs~~iel+labour+law',
	'www.knovel.com/knovel2/toc.jsp?bookid=761&verticalid=0',
	'www.knovel.com/knovel2/toc.jsp?spaceid=10093&bookid=735',
	'www.latinnews.com',
	'www.lib.uchicago.edu/efts/artfl/databases/bibliopolis/cli',
	'www.lib.uchicago.edu/efts/artfl/databases/bibliopolis/cphil',
	'www.lib.uchicago.edu/efts/artfl/databases/bibliopolis/rom',
	'www.lib.uchicago.edu/efts/artfl/databases/bibliopolis/rrn',
	'www.lib.uchicago.edu/efts/artfl/databases/bibliopolis/tgs',
	'www.lib.uchicago.edu/efts/artfl/databases/prov',
	'www.lib.uchicago.edu/efts/artfl/projects/fww',
	'www.llmcdigital.org',
	'www.lobbyists.info',
	'www.loebclassics.com',
	'www.lyellcollection.org',
	'www.massobservation.amdigital.co.uk',
	'www.medievalfamilylife.amdigital.co.uk',
	'www.medievaltravel.amdigital.co.uk/search/advanced-search.aspx',
	'www.mergentarchives.com',
	'www.mergentintellect.com',
	'www.mergentonline.com/reportssearch.php?pagetype=industrysearch&',
	'www.morganclaypool.com/search/advanced',
	'www.nature.com/news',
	'www.nature.com/scientificamerican/archive/index.html',
	'www.nature.com/siteindex/index.html',
	'www.ncbi.nlm.nih.gov/entrez/query.fcgi?otool=maubnulib',
	'www.nexisuni.com',
	'www.nursinglibrary.org/vhl',
	'www.nybooks.com/archives',
	'www.oecd-ilibrary.org',
	'www.oecd-ilibrary.org/statistics',
	'www.oed.com',
	'www.osapublishing.org/search.cfm',
	'www.oxfordaasc.com',
	'www.oxfordartonline.com',
	'www.oxfordartonline.com/benezit',
	'www.oxfordbiblicalstudies.com',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780190280024',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195389661',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195390155',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195393361',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195393521',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195396577',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195396584',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195396607',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780195399318',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199730414',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199743292',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199756384',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199756797',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199756841',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199757824',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199766567',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199766581',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199772810',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199791231',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199791279',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199791286',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199799558',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199827251',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199828340',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199830060',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199840731',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199846719',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199846733',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199846740',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199874002',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199913701',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199920082',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199920105',
	'www.oxfordbibliographies.com/browse?module_0=obo-9780199941728',
	'www.oxfordbibliographies.com/obo/page/political-science',
	'www.oxfordbibliographies.com/obo/page/renaissance-and-reformation',
	'www.oxfordbibliographies.com/obo/page/social-work',
	'www.oxfordbibliographies.com/view/document/obo-9780199791231/obo-9780199791231-0024.xml',
	'www.oxforddictionaries.com',
	'www.oxforddnb.com',
	'www.oxfordhandbooks.com/page/psychology',
	'www.oxfordhandbooks.com/page/religion',
	'www.oxfordislamicstudies.com',
	'www.oxfordmusiconline.com',
	'www.oxfordreference.com',
	'www.oxfordreference.com.proxy.bc.edu/view/10.1093/acref/9780191842665.001.0001/acref-9780191842665',
	'www.oxfordreference.com/view/10.1093/acref/9780195125955.001.0001/acref-9780195125955',
	'www.oxfordreference.com/view/10.1093/acref/9780195169218.001.0001/acref-9780195169218',
	'www.oxfordreference.com/view/10.1093/acref/9780195176322.001.0001/acref-9780195176322',
	'www.oxfordreference.com/view/10.1093/acref/9780195189483.001.0001/acref-9780195189483',
	'www.oxfordreference.com/view/10.1093/acref/9780195313918.001.0001/acref-9780195313918#showmorecontent',
	'www.oxfordreference.com/views/book_search.html?book=t249',
	'www.oxfordscholarlyeditions.com',
	'www.palgraveconnect.com/pc/doifinder/10.1057/9781137305688',
	'www.pep-web.org',
	'www.perditamanuscripts.amdigital.co.uk',
	'www.perseus.tufts.edu',
	'www.psychiatryonline.com',
	'www.reaxys.com',
	'www.referenceusa.com',
	'www.rep.routledge.com/search?showadvancedsearch',
	'www.responsa.co.il/default.aspx',
	'www.rkma.com/bc/oneill',
	'www.rocksbackpages.com',
	'www.romanticism.amdigital.co.uk',
	'www.ruhr-uni-bochum.de/philosophy/projects/abbreviationes/servers.html',
	'www.sciencedirect.com/science/referenceworks/9780080430768',
	'www.sciencedirect.com/science/referenceworks/9780080931395',
	'www.sciencedirect.com/science/referenceworks/9780080983004',
	'www.sciencedirect.com/science/referenceworks/9780123694010',
	'www.sciencedirect.com/science/referenceworks/9780123708700',
	'www.sciencedirect.com/science/referenceworks/9780123744739',
	'www.sciencedirect.com/science/referenceworks/9780444527486',
	'www.sciencedirect.com/science/referenceworks/9780444538031',
	'www.sciencedirect.com/science?_ob=journallisturl&_type=all&_auth=y&_btn=y&_acct=c000026018&_version=1&_urlversion=0&_userid=521319&md5=99ce3a582d5a4b4a50ecec8bb1fb420c',
	'www.scitation.org',
	'www.scopus.com',
	'www.snl.com/interactivex',
	'www.socialexplorer.com/ezproxy',
	'www.socialismonfilm.amdigital.co.uk',
	'www.spiedigitallibrary.org',
	'www.springerlink.com/content/978-1-4020-9211-4',
	'www.springerlink.com/content/m46752/?sortorder=asc&v=condensed',
	'www.stalindigitalarchive.com',
	'www.statcan.gc.ca/start-debut-eng.html',
	'www.statehousenews.com/public/default.htm',
	'www.statindex.org/cis/psqlquery',
	'www.statista.com',
	'www.tandfonline.com/action/dosearch?allfield=encyclopedia+of+natural+resources&content=title&target=titlesearch',
	'www.teachingbooks.net',
	'www.tol.org',
	'www.trackingterrorism.org',
	'www.tradelawguide.com',
	'www.ulrichsweb.com/ulrichsweb',
	'www.victorianperiodicals.com',
	'www.wisertrade.org/ftlib10web/ftbegin',
	'www.wkcheetah.com',
	'www.wkcheetah.com/#/home/bluechip',
	'www.worldreligiondatabase.org/wrd_home.asp',
	'www.worldshakesbib.org/index.html',
	'www.worldtradelaw.net',
	'www.wwp.northeastern.edu/wwo',
	'www.zbmath.org',
	'www3.interscience.wiley.com/cgi-bin/mrwhome/104554785/home',
	'ybio.brillonline.com',
];
var db_full_names_date_stamp = '20180323-145726';
