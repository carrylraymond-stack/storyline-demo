window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
// Putting it together
let dateString = month + "/" + day + "/" + year;
//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
player.SetVar("month", month);
player.SetVar("currentyear", year);
}

window.Script2 = function()
{
  document.getElementById('reset').style.visibility = "hidden";
document.getElementById('play-pause').style.visibility = "hidden";
}

window.Script3 = function()
{
  // fetch date from computer - use results to display current year
// in Copyright footer on all pages

var SystemDate;
var dateYear;
var player = GetPlayer();

function setYearValueToVariable() {
  player = GetPlayer();
  SystemDate = new Date();
  dateYear = SystemDate.getFullYear();
  player.SetVar("copyrightYearCurrentYear", dateYear);
}
setYearValueToVariable();
}

window.Script4 = function()
{
  function getSLVars() {
  SLWin_InstNotesCurrentSlideNum = player.GetVar("SL_InstNotesCurrentSlideNum");
  loadOrReLoadComparison = player.GetVar("SL_PDFPathAndFileAuto");
  doTheConcat();
}

function doTheConcat() {
  SLWin_PDFPathAndFileAuto = SLWin_pathAuto.concat(AWin_InsNotesPdfName, " ", SLWin_InstNotesCurrentSlideNum, SLWin_fileExtesion);
  SLWin_PDFFileAuto = AWin_InsNotesPdfName.concat(" ", SLWin_InstNotesCurrentSlideNum, SLWin_fileExtesion);
  SetSLVars();
}

function SetSLVars() {
  player.SetVar("SL_PDFPathAndFileAuto", SLWin_PDFPathAndFileAuto);
  player.SetVar("SL_PDFFileAuto", SLWin_PDFFileAuto);
  checkWinLoadOrReLoad();
}

function checkWinLoadOrReLoad() {
  if ((SLWin_WindowInstructorNotes != null) && (SLWin_WindowInstructorNotes.closed == false)) {
    if (loadOrReLoadComparison == SLWin_PDFPathAndFileAuto) {} else {
      instNotes.LoadPDFVarsAuto();
    }
  } else {
    player.SetVar("SL_InstNotesOpen", 0);
    player.SetVar("SL_InstNotesMode", "none");
  }
}
getSLVars();
}

window.Script5 = function()
{
  // DeBounce - 1.6 second delay between Lesson page change and Notes page update
// purpose: prevent auto paging from running when pages are changing rapidly

var pageEval;
var deBounce_Active;
var ZeNumber;
var player = GetPlayer();

function startDeBounce() {
  player = GetPlayer();
  pageEval = player.GetVar("SL_listenPageEval");
  player.SetVar("SL_deBounce_Active", 1);
  ZeNumber = pageEval;
  (ZeNumber++);
  setTimeout(autoPagePDF, 1600);
}

function autoPagePDF() {
  player.SetVar("SL_deBounce_Active", 0);
  player.SetVar("SL_listenPageEval", ZeNumber);
}

startDeBounce();
}

window.Script6 = function()
{
  document.getElementById('reset').style.visibility = "hidden";
document.getElementById('play-pause').style.visibility = "hidden";
}

window.Script7 = function()
{
  function getSLVars() {
  SLWin_InstNotesCurrentSlideNum = player.GetVar("SL_InstNotesCurrentSlideNum");
  loadOrReLoadComparison = player.GetVar("SL_PDFPathAndFileAuto");
  doTheConcat();
}

function doTheConcat() {
  SLWin_PDFPathAndFileAuto = SLWin_pathAuto.concat(AWin_InsNotesPdfName, " ", SLWin_InstNotesCurrentSlideNum, SLWin_fileExtesion);
  SLWin_PDFFileAuto = AWin_InsNotesPdfName.concat(" ", SLWin_InstNotesCurrentSlideNum, SLWin_fileExtesion);
  SetSLVars();
}

function SetSLVars() {
  player.SetVar("SL_PDFPathAndFileAuto", SLWin_PDFPathAndFileAuto);
  player.SetVar("SL_PDFFileAuto", SLWin_PDFFileAuto);
  checkWinLoadOrReLoad();
}

function checkWinLoadOrReLoad() {
  if ((SLWin_WindowInstructorNotes != null) && (SLWin_WindowInstructorNotes.closed == false)) {
    if (loadOrReLoadComparison == SLWin_PDFPathAndFileAuto) {} else {
      instNotes.LoadPDFVarsAuto();
    }
  } else {
    player.SetVar("SL_InstNotesOpen", 0);
    player.SetVar("SL_InstNotesMode", "none");
  }
}
getSLVars();
}

window.Script8 = function()
{
  // DeBounce - 1.6 second delay between Lesson page change and Notes page update
// purpose: prevent auto paging from running when pages are changing rapidly

var pageEval;
var deBounce_Active;
var ZeNumber;
var player = GetPlayer();

function startDeBounce() {
  player = GetPlayer();
  pageEval = player.GetVar("SL_listenPageEval");
  player.SetVar("SL_deBounce_Active", 1);
  ZeNumber = pageEval;
  (ZeNumber++);
  setTimeout(autoPagePDF, 1600);
}

function autoPagePDF() {
  player.SetVar("SL_deBounce_Active", 0);
  player.SetVar("SL_listenPageEval", ZeNumber);
}

startDeBounce();
}

};
