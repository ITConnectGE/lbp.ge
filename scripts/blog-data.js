/**
 * Single source of truth for the blog index, search, filters and related cards.
 * Add a post here and it appears everywhere; `slug` must match the folder name
 * under /ka/blog/ and /en/blog/. Posts are ordered newest first.
 */
window.BLOG_CATEGORIES = [
  {
    "key": "corporate",
    "ka": "კორპორაციული სამართალი",
    "en": "Corporate"
  },
  {
    "key": "tax",
    "ka": "საგადასახადო",
    "en": "Tax"
  },
  {
    "key": "labour",
    "ka": "შრომითი სამართალი",
    "en": "Employment"
  },
  {
    "key": "disputes",
    "ka": "დავები და აღსრულება",
    "en": "Disputes"
  },
  {
    "key": "crypto",
    "ka": "კრიპტო და ვირტ. აქტივები",
    "en": "Crypto"
  },
  {
    "key": "criminal",
    "ka": "სისხლის სამართალი",
    "en": "Criminal"
  },
  {
    "key": "ip",
    "ka": "ინტელექტუალური საკუთრება",
    "en": "IP"
  }
];

window.BLOG_POSTS = [
  {
    "slug": "UnsignedContract",
    "date": "2026-08-24",
    "cat": "disputes",
    "card": "/img/blog/unsigned-contract.jpg",
    "hero": "/img/blog/unsigned-contract.jpg",
    "read": 7,
    "ka": {
      "title": "ხელშეკრულებაზე ხელი არავის მოუწერია",
      "subtitle": "შეიძლება თუ არა ელექტრონული მიმოწერა გახდეს ვალდებულების საფუძველი?",
      "excerpt": "WhatsApp-ში ან ელფოსტაზე შეთანხმებული ფასი და ვადები სასამართლომ შეიძლება ნამდვილ ხელშეკრულებად მიიჩნიოს — რას აქცევს მოსამართლე ყურადღებას.",
      "author": ""
    },
    "en": {
      "title": "No One Signed the Contract",
      "subtitle": "Can Electronic Correspondence Become the Basis for an Obligation?",
      "excerpt": "A price and deadline agreed over WhatsApp or email can be treated by a Georgian court as a binding contract — here is what judges actually look at.",
      "author": ""
    }
  },
  {
    "slug": "CryptoExchangeLicence",
    "date": "2026-08-24",
    "cat": "crypto",
    "card": "/img/blog/crypto-exchange-licence.jpg",
    "hero": "/img/blog/crypto-exchange-licence.jpg",
    "read": 6,
    "ka": {
      "title": "კრიპტოვალუტის ბირჟამ ლიცენზია დაკარგა",
      "subtitle": "ვინ აგებს პასუხს მომხმარებლის დაკარგულ აქტივებზე საქართველოში",
      "excerpt": "ეროვნულმა ბანკმა პლატფორმას რეგისტრაცია გაუუქმა, ანგარიში კი მიუწვდომელია. რა მექანიზმები რჩება მომხმარებელს რეალურად.",
      "author": ""
    },
    "en": {
      "title": "Cryptocurrency Exchange Loses Its License",
      "subtitle": "Who Is Liable for Users' Lost Assets in Georgia",
      "excerpt": "The National Bank revokes a platform's registration and the account goes dark. What legal mechanisms actually remain available to the user.",
      "author": ""
    }
  },
  {
    "slug": "ForeignBranchRegistration",
    "date": "2026-08-24",
    "cat": "corporate",
    "card": "/img/blog/foreign-branch-registration.jpg",
    "hero": "/img/blog/foreign-branch-registration.jpg",
    "read": 8,
    "ka": {
      "title": "უცხოური კომპანიის ფილიალის რეგისტრაცია საქართველოში",
      "subtitle": "პროცედურა და საგადასახადო შედეგები",
      "excerpt": "ფილიალი თუ შვილობილი შპს — რეგისტრაციის ეტაპები, საჭირო დოკუმენტები და მუდმივი დაწესებულების საგადასახადო რეჟიმი.",
      "author": ""
    },
    "en": {
      "title": "Registration of a Foreign Company's Branch in Georgia",
      "subtitle": "Procedure and Tax Consequences",
      "excerpt": "Branch or subsidiary LLC — the registration steps, the documents required, and the permanent-establishment tax regime that follows.",
      "author": ""
    }
  },
  {
    "slug": "TaxInspection",
    "date": "2026-08-24",
    "cat": "tax",
    "card": "/img/blog/tax-inspection-first-minutes.jpg",
    "hero": "/img/blog/tax-inspection-first-minutes.jpg",
    "read": 5,
    "ka": {
      "title": "საგადასახადო ინსპექტორი კომპანიაშია",
      "subtitle": "რას აკეთებ პირველ 10 წუთში",
      "excerpt": "ექვსი ნაბიჯი, რომელიც პირველივე წუთებში განსაზღვრავს, როგორი იქნება მთელი შემდგომი საგადასახადო პროცესი.",
      "author": ""
    },
    "en": {
      "title": "A Tax Inspector Is at the Company",
      "subtitle": "What You Do in the First 10 Minutes",
      "excerpt": "Six steps taken in the first minutes that decide how the entire tax procedure will unfold — and what you should never sign on the spot.",
      "author": ""
    }
  },
  {
    "slug": "InsolvencyProcedure",
    "date": "2026-08-24",
    "cat": "corporate",
    "card": "/img/blog/insolvency-procedure.jpg",
    "hero": "/img/blog/insolvency-procedure.jpg",
    "read": 4,
    "ka": {
      "title": "გადახდისუუნარობის (გაკოტრების) პროცედურა საქართველოში",
      "subtitle": "რეფორმირებული კანონმდებლობა",
      "excerpt": "რას სთავაზობს ახალი კანონი კომპანიას, რომელსაც კრედიტორებთან ერთდროული, ორგანიზებული მოწესრიგება სჭირდება.",
      "author": ""
    },
    "en": {
      "title": "Insolvency (Bankruptcy) Procedure in Georgia",
      "subtitle": "Reformed Legislation",
      "excerpt": "What the reformed law offers a company that needs an organised, simultaneous settlement with all of its creditors rather than piecemeal litigation.",
      "author": ""
    }
  },
  {
    "slug": "ClientDatabaseTheft",
    "date": "2026-08-24",
    "cat": "labour",
    "card": "/img/blog/client-database-theft.jpg",
    "hero": "/img/blog/client-database-theft.jpg",
    "read": 4,
    "ka": {
      "title": "თანამშრომელმა კლიენტების ბაზა წაიღო კონკურენტთან",
      "subtitle": "რატომ არ მუშაობს ხშირად კონკურენციის აკრძალვის პუნქტი",
      "excerpt": "არაკონკურენციის პუნქტი ხელშეკრულებაში გაქვთ, მაგრამ სასამართლოში მაინც ვერ დგება — რა განაპირობებს მის ნამდვილობას.",
      "author": ""
    },
    "en": {
      "title": "An Employee Took the Client Base to a Competitor",
      "subtitle": "Why the Non-Compete Clause Often Doesn't Work",
      "excerpt": "You have a non-compete clause in the contract and it still fails in court — what actually determines whether such a clause holds.",
      "author": ""
    }
  },
  {
    "slug": "PropertyConfiscation",
    "date": "2026-08-24",
    "cat": "criminal",
    "card": "/img/blog/property-confiscation.jpg",
    "hero": "/img/blog/property-confiscation.jpg",
    "read": 4,
    "ka": {
      "title": "ქონების ჩამორთმევა საქართველოში",
      "subtitle": "რას ნიშნავს კონფისკაცია საქართველოს კანონმდებლობით",
      "excerpt": "ერთი ტერმინი, ორი სრულიად განსხვავებული ქმედება — და ის ზღვარი, სადაც სახელმწიფოს უფლებამოსილება მთავრდება.",
      "author": ""
    },
    "en": {
      "title": "Property Confiscation in Georgia",
      "subtitle": "What Confiscation Means Under Georgian Law",
      "excerpt": "One term, two entirely different actions — and the line where the state's authority over a defendant's property ends.",
      "author": ""
    }
  },
  {
    "slug": "DeportationAsPunishment",
    "date": "2026-08-24",
    "cat": "criminal",
    "card": "/img/blog/deportation-as-punishment.jpg",
    "hero": "/img/blog/deportation-as-punishment.jpg",
    "read": 4,
    "ka": {
      "title": "დეპორტაცია სასჯელის სახედ",
      "subtitle": "რომელ შემთხვევებში არ გააძევებს სასამართლო მსჯავრდებულ უცხოელს საქართველოდან",
      "excerpt": "სასჯელის მოხდის შემდეგ გაძევება ავტომატური არ არის — კანონი კონკრეტულ გამონაკლისებს ითვალისწინებს.",
      "author": ""
    },
    "en": {
      "title": "Deportation as a Type of Punishment",
      "subtitle": "In Which Cases Will the Court Not Expel a Convicted Foreigner from Georgia",
      "excerpt": "Expulsion after serving a sentence is not automatic — the law sets out specific grounds on which it does not apply at all.",
      "author": ""
    }
  },
  {
    "slug": "StartupIPProtection",
    "date": "2026-08-24",
    "cat": "ip",
    "card": "/img/blog/startup-ip-protection.jpg",
    "hero": "/img/blog/startup-ip-protection.jpg",
    "read": 4,
    "ka": {
      "title": "ინტელექტუალური საკუთრების დაცვა სტარტაპისთვის",
      "subtitle": "სავაჭრო ნიშანი, პატენტი და საავტორო უფლება",
      "excerpt": "სამი განსხვავებული ინსტრუმენტი, სამი განსხვავებული ვადა — და ყველაზე იაფად თავიდან ასაცილებელი შეცდომა ქართულ სტარტაპ გარემოში.",
      "author": ""
    },
    "en": {
      "title": "Intellectual Property Protection for Startups",
      "subtitle": "Trademark, Patent, and Copyright",
      "excerpt": "Three different instruments on three different timelines — and the cheapest mistake to avoid in the Georgian startup environment.",
      "author": ""
    }
  },
  {
    "slug": "EmploymentTermination",
    "date": "2026-08-24",
    "cat": "labour",
    "card": "/img/blog/employment-termination.jpg",
    "hero": "/img/blog/employment-termination.jpg",
    "read": 4,
    "ka": {
      "title": "შრომითი ხელშეკრულების შეწყვეტა საქართველოში",
      "subtitle": "დამსაქმებლის ვალდებულებები და რისკები",
      "excerpt": "შრომის კოდექსი დახურულ ჩამონათვალს იცნობს. ყველაზე ხშირი პრობლემა საფუძვლის შერჩევა კი არა, დასაბუთების უკმარისობაა.",
      "author": ""
    },
    "en": {
      "title": "Termination of the Labor Contract in Georgia",
      "subtitle": "The Employer's Obligations and Risks",
      "excerpt": "The Labor Code sets a closed list of grounds. The most common failure in practice is not the wrong ground, but insufficient justification.",
      "author": ""
    }
  },
  {
    "slug": "CompanyForms",
    "date": "2026-07-03",
    "cat": "corporate",
    "card": "/img/blog/company-forms.jpg",
    "hero": "/img/blog/company-forms.jpg",
    "read": 5,
    "ka": {
      "title": "კომპანიის ძირითადი ფორმები საქართველოში",
      "subtitle": "შპს, ინდივიდუალური მეწარმე თუ სხვა — რომლის არჩევაა მიზანშეწონილი?",
      "excerpt": "შპს, ინდივიდუალური მეწარმე თუ სს — პასუხისმგებლობა, გადასახადები და მმართველობა შედარებით ცხრილში.",
      "author": "ირაკლი თეგაძე, LBP Law Office"
    },
    "en": {
      "title": "The Main Forms of a Company in Georgia",
      "subtitle": "LLC, Individual Entrepreneur or JSC — which one is appropriate to choose?",
      "excerpt": "LLC, individual entrepreneur or JSC — liability, taxation and governance side by side in one comparison table.",
      "author": "Irakli Tegadze, LBP Law Office"
    }
  },
  {
    "slug": "ArbitralAward",
    "date": "2026-06-11",
    "cat": "disputes",
    "card": "/img/blog/arbitral-award.jpg",
    "hero": "/img/blog/arbitral-award.jpg",
    "read": 3,
    "ka": {
      "title": "საარბიტრაჟო გადაწყვეტილების ცნობა და აღსრულება",
      "subtitle": "5 პრაქტიკული რჩევა",
      "excerpt": "5 პრაქტიკული რჩევა სახელმწიფო ბაჟის, მინდობილობის, შეთანხმების და თარგმანების შესახებ.",
      "author": "თამარ მაზანაშვილი, იურისტი LBP Law Office-ში"
    },
    "en": {
      "title": "Arbitral Award Recognition & Enforcement",
      "subtitle": "Five practical tips",
      "excerpt": "Five practical tips on state fees, powers of attorney, original agreements, and translations.",
      "author": "Tamar Mazanashvili, Associate at LBP Law Office"
    }
  },
  {
    "slug": "CompanyReliability",
    "date": "2026-06-11",
    "cat": "corporate",
    "card": "/img/blog/company-reliability.jpg",
    "hero": "/img/blog/company-reliability.jpg",
    "read": 7,
    "ka": {
      "title": "კომპანიის სანდოობის გადამოწმება",
      "subtitle": "დიუ დილიჯენსი ეტაპობრივად",
      "excerpt": "დიუ-დილიჯენსი ეტაპობრივად: რეგისტრაცია, საკუთრება, ფინანსური მდგომარეობა, სასამართლო ისტორია.",
      "author": "თამარ მაზანაშვილი, იურისტი LBP Law Office-ში"
    },
    "en": {
      "title": "How to Check if a Georgian Company is Reliable",
      "subtitle": "Step-by-step due diligence",
      "excerpt": "Step-by-step due diligence: registration, ownership, financial standing, litigation history.",
      "author": "Tamar Mazanashvili, Associate at LBP Law Office"
    }
  },
  {
    "slug": "DebtRecoveryAndLoans",
    "date": "2026-06-11",
    "cat": "disputes",
    "card": "/img/blog/debt-recovery.jpg",
    "hero": "/img/blog/debt-recovery.jpg",
    "read": 8,
    "ka": {
      "title": "დავალიანებების ამოღება და ბიზნესსესხები",
      "subtitle": "პრაქტიკული გზამკვლევი უცხოური ბიზნესებისთვის",
      "excerpt": "პრაქტიკული გზამკვლევი უცხოური ბიზნესებისთვის — სამართლებრივი მექანიზმები და დაფინანსების მოთხოვნები.",
      "author": "თამარ მაზანაშვილი, იურისტი LBP Law Office-ში"
    },
    "en": {
      "title": "Debt Recovery & Business Loans",
      "subtitle": "A practical guide for foreign businesses",
      "excerpt": "A practical guide for foreign businesses on recovering debts and obtaining financing in Georgia.",
      "author": "Tamar Mazanashvili, Associate at LBP Law Office"
    }
  },
  {
    "slug": "LabourRegulation",
    "date": "2026-02-28",
    "cat": "labour",
    "card": "/img/blog/labour-regulation.jpg",
    "hero": "/img/blog/labour-regulation.jpg",
    "read": 3,
    "ka": {
      "title": "შრომის შინაგანაწესი",
      "subtitle": "რატომ სჭირდება ის ყველა ბიზნესს",
      "excerpt": "რატომ არის შრომის შინაგანაწესი აუცილებელი ყველა ბიზნესისთვის, რომელსაც დასაქმებულები ჰყავს საქართველოში.",
      "author": "ქეთა მედულაშვილი, LBP-ს იურიდიული ასისტენტი"
    },
    "en": {
      "title": "Labour Regulation",
      "subtitle": "Why every business needs one",
      "excerpt": "Why Internal Labor Regulations are essential for every business with employees in Georgia.",
      "author": "Keta Medulashvili, Legal Assistant at LBP"
    }
  },
  {
    "slug": "VirtualAssets",
    "date": "2026-02-28",
    "cat": "crypto",
    "card": "/img/blog/virtual-assets.jpg",
    "hero": "/img/blog/virtual-assets.jpg",
    "read": 4,
    "ka": {
      "title": "ვირტუალური აქტივები საქართველოში",
      "subtitle": "რეგულირება და ახალი პრაქტიკული გამოწვევები",
      "excerpt": "კრიპტოვალუტის მომსახურების პროვაიდერებისთვის რეგულაცია, ლიცენზირება და პრაქტიკული გამოწვევები საქართველოს კანონმდებლობით.",
      "author": "მარიამ ზაუტაშვილი, LBP-ს უფროსი იურისტი"
    },
    "en": {
      "title": "Virtual Assets in Georgia",
      "subtitle": "Regulation and New Practical Challenges",
      "excerpt": "Regulation, licensing, and practical challenges for cryptocurrency service providers under Georgian law.",
      "author": "Mariam Zautashvili, Leading Associate at LBP"
    }
  }
];
