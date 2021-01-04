import {
    Events,
    UserPressedDeleteAnimal,
    UserSubmittedEditedAnimal,
    UserSubmittedNewAnimal,
    UserSubmittedNewAnimalNotes
} from "../events";
import {db} from "../../dbApi";
import {call, delay, fork, put, takeLatest} from "redux-saga/effects";
import {NavigationHandler} from "../../navigation/NavigationService";
import {animalCreated, animalDeleted, animalUpdated} from "../actions";

function* deleteAnimal(event: UserPressedDeleteAnimal) {
    yield call(db.deleteAnimal, event.payload.animalId);
    yield delay(1000);
    yield put(animalDeleted({animalId: event.payload.animalId, groupId: event.payload.groupId}));
}

function* watchDeleteAnimalSaga() {
    yield takeLatest(Events.userPressedDeleteAnimal, deleteAnimal);
}


function* editAnimal(event: UserSubmittedEditedAnimal) {
    yield call(db.updateAnimal, event.payload.newAnimal);
    yield delay(1000);
    yield put(animalUpdated(event.payload.newAnimal));
    NavigationHandler.navigateToSessionDetails(event.payload.sessionId);
}

function* watchEditAnimalSaga() {
    yield takeLatest(Events.userSubmittedEditedAnimal, editAnimal);
}

function* editAnimalNotes(event: UserSubmittedNewAnimalNotes) {
    yield call(db.updateAnimal, event.payload);
    yield delay(1000);
    yield put(animalUpdated(event.payload));
}

function* watchEditAnimalNotesSaga() {
    yield takeLatest(Events.userSubmittedNewAnimalNotes, editAnimalNotes);
}

function* createAnimal(event: UserSubmittedNewAnimal) {
    const animalId = (yield call(db.createAnimal, event.payload)) as string;
    yield delay(1000);
    const {sessionId, groupId, ...animal} = event.payload;
    yield put(animalCreated({animal: {animalId, ...animal}, groupId}));
    NavigationHandler.goBack();
}


function* watchCreateAnimalSaga() {
    yield takeLatest(Events.userSubmittedNewAnimal, createAnimal);
}

export function* animalSaga() {
    yield fork(watchDeleteAnimalSaga);
    yield fork(watchEditAnimalSaga);
    yield fork(watchEditAnimalNotesSaga);
    yield fork(watchCreateAnimalSaga);
}
