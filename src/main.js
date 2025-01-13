//import gsap from '../dist/gsap.js';

import { ScrollTrigger, ScrollSmoother } from "./gsap/all.js";


import home from './home.js'
import offline from './offline.js'
import ecommerce from './ecommerce.js'
import rp from './rp.js'
import partnerships from './partnerships.js'
import careers from './careers.js'
import contact from './contact.js'
import startups from './startups.js'
import investor from './investor.js'
import creative from './creative.js'
import about from './about.js'
import freelancing from './freelancing.js'
import agency from './agency.js'
import advisory from './advisory.js'
import recruiting from './recruiting.js'
import talent from './talent.js'
import other from './other.js'
import blog from './blog.js'
import blogtemplate from './blogtemplate.js'
import study from './study.js'
import studytemplate from './studytemplate.js'
import author from './author.js'
import webinars from './webinars.js'
import confirmation from './confirmation.js'
import webinartemplate from './webinartemplate.js'
import videotemplate from './videotemplate.js'
import referrals from './referrals.js'
import homerp from './homerp.js'

let isHome = document.querySelector('body').classList.contains('body--home')
if (isHome) {
  home()
}

let isOffline = document.querySelector('body').classList.contains('body--offline')
if (isOffline) {
  offline()
}

let isPartnerships = document.querySelector('body').classList.contains('body--partnerships')
if (isPartnerships) {
  partnerships()
}

let isEcommerce = document.querySelector('body').classList.contains('body--ecommerce')
if (isEcommerce) {
  ecommerce()
}

let isRp = document.querySelector('body').classList.contains('body--rp')
if (isRp) {
  rp()
}

let isCareers = document.querySelector('body').classList.contains('body--careers')
if (isCareers) {
  careers()
}

let isStartups = document.querySelector('body').classList.contains('body--startups')
if (isStartups) {
  startups()
}

let isInvestor = document.querySelector('body').classList.contains('body--investor')
if (isInvestor) {
  investor()
}

let isOther = document.querySelector('body').classList.contains('body--other')
if (isOther) {
  other()
}

let isCreative = document.querySelector('body').classList.contains('body--creative')
if (isCreative) {
  creative()
}

let isAbout = document.querySelector('body').classList.contains('body--about')
if (isAbout) {
  about()
}

let isFreelancing = document.querySelector('body').classList.contains('body--freelancing')
if (isFreelancing) {
  freelancing()
}

let isAgency = document.querySelector('body').classList.contains('body--agency')
if (isAgency) {
  agency()
}

let isAdvisory = document.querySelector('body').classList.contains('body--advisory')
if (isAdvisory) {
  advisory()
}

let isRecruiting = document.querySelector('body').classList.contains('body--recruiting')
if (isRecruiting) {
  recruiting()
}

let isTalent = document.querySelector('body').classList.contains('body--talent')
if (isTalent) {
  talent()
}

let isBlog = document.querySelector('body').classList.contains('body--blog')
if (isBlog) {
  blog()
}

let isBlogtemplate = document.querySelector('body').classList.contains('body--blogtemplate')
if (isBlogtemplate) {
  blogtemplate()
}

let isStudy = document.querySelector('body').classList.contains('body--study')
if (isStudy) {
  study()
}

let isStudytemplate = document.querySelector('body').classList.contains('body--studytemplate')
if (isStudytemplate) {
  studytemplate()
}

let isContact = document.querySelector('body').classList.contains('body--contact')
if (isContact) {
  contact()
}

let isAuthor = document.querySelector('body').classList.contains('body--authors')
if (isAuthor) {
  author()
}

let isWebinars = document.querySelector('body').classList.contains('body--webinars')
if (isWebinars) {
  webinars()
}

let isWebinartemplate = document.querySelector('body').classList.contains('body--webinartemplate')
if (isWebinartemplate) {
  webinartemplate()
}

let isConfirmation = document.querySelector('body').classList.contains('body--confirmation')
if (isConfirmation) {
  confirmation()
}

let isVideotemplate = document.querySelector('body').classList.contains('body--videotemplate')
if (isVideotemplate) {
  videotemplate()
}

let isReferrals = document.querySelector('body').classList.contains('body--referrals')
if (isReferrals) {
  referrals()
}

let isHomerp = document.querySelector('body').classList.contains('body--homerp')
if (isHomerp) {
  homerp()
}
