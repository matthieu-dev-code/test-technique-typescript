import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';

describe('ResultService', () => {
  let resultService: ResultService;

  it('should be created', () => {
    resultService = new ResultService();
    expect(resultService).toBeTruthy();
  });





  /* step 3 (evenement) */
  describe(",aprés l\'ajout de 3 resultats,", () => {

    beforeEach(() => {
      // init le service avec 3 resultats (doit etre identique que le step 2)
    });

    //ps : je ne veux pas que les event de création soi initialisé dans le beforeEach ci dessus mais directement dans le resultService
    it("devrait avoir la list des résultat dans l\'order de création ( en se basant sur les events de création)", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir 1 event a la date de maintenant quand 1 résultat est vue", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir 2 events avec 2 dates différent aprés la vision d\'un resultat puis la suppression de la vision", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir une fonction qui retourne une liste ordonnée des resultats par rapport au dernier modifier", () => {
      expect(false).toEqual(true);
    });
  });

  /* proposé de nouveau test */

});
