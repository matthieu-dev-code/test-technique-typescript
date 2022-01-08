import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';

describe('ResultService', () => {
  let resultService: ResultService;

  it('should be created', () => {
    resultService = new ResultService();
    expect(resultService).toBeTruthy();
  });


  /* step 1 : initialisation du projet avec 0 et 1 resultat */
  it('devrait être initialisé avec une liste de résultat vide', () => {
      expect(resultService.getAllResult()).toEqual([]);
  });

  describe("aprés l'ajout d'un résultat,", () => {
    beforeEach(() => {
      const result: ResultModel = {id: 46,idOwner:76,idRecipients:[42],isSeen:false,eventResults:[],contentOfResult:"Test"};
      resultService = new ResultService();
      resultService.addResult(result);
    });

    it('devrait avoir une liste de 1 résultat non vue', () => {
      expect(resultService.getAllResult().length).toEqual(1);
    });

    it('devrait avoir une liste de 1 résultat vue aprés la vision de ce résultat', () => {
      resultService.seenResult(46);
      expect(resultService.getAllResultSeen().length).toEqual(1);
      expect(resultService.getAllResult()[1].isSeen).toEqual(true);
    });
  });



  /* proposé de nouveau test */


});
