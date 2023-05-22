// external packages.
import { IconLookup } from "@fortawesome/fontawesome-svg-core";

type IconLibraryConfigType = {
  addressCard: IconLookup;
  archive: IconLookup;
  chessRook: IconLookup;
  mapSigns: IconLookup;
  peopleCarry: IconLookup;
  passwordLock: IconLookup;
  passwordUnlock: IconLookup;
  // linkAddNew: IconLookup;
  // linkHelp: IconLookup;
  // linkHome: IconLookup;
  // paginationLeft: IconLookup;
  // paginationRight: IconLookup;
  // passwordHidden: IconLookup;
  // passwordVisible: IconLookup;
  signOut: IconLookup;
  spinner: IconLookup;
  toriiGate: IconLookup;
  userTie: IconLookup;
  wrench: IconLookup;
};

const iconLibrary: IconLibraryConfigType = {
  addressCard: { prefix: "fas", iconName: "address-card" },
  archive: { prefix: "fas", iconName: "archive"},
  // burn: ["fas", "fire-alt"],
  // calendarUnlocked: ["fas", "calendar-check"],
  // calendarLocked: ["fas", "calendar-times"],
  // chessKing: ["fas", "chess-king"],
  // chessKingAndQueen: ["fas", "chess"],
  // chessPawn: ["fas", "chess-pawn"],
  chessRook: { prefix: "fas", iconName: "chess-rook"},
  mapSigns: { prefix: "fas", iconName: "map-signs"},
  passwordLock: { prefix: "fas", iconName: "lock"},
  passwordUnlock: { prefix: "fas", iconName: "unlock"},
  // peopleArrows: ["fas", "people-arrows"],
  peopleCarry: { prefix: "fas", iconName: "people-carry"},
  // scroll: ["fas", "scroll"],
  // sign: ["fas", "sign"],
  signOut: { prefix: "fas", iconName: "right-from-bracket"},
  // skull: ["fas", "skull"],
  spinner: { prefix: "fas", iconName: "spinner"},
  // star: ["fas", "star"],
  toriiGate: { prefix: "fas", iconName: "torii-gate"},
  // trophy: ["fas", "trophy"],
  userTie: { prefix: "fas", iconName: "user-tie"},
  wrench: { prefix: "fas", iconName: "wrench"}
};

export default iconLibrary;