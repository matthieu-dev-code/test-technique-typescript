import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';

describe('ResultService', () => {
  let resultService: ResultService;

  it('should be created', () => {
    resultService = new ResultService();
    expect(resultService).toBeTruthy();
  });



  /* step 2 : 3 resultats */
  describe("aprés l'ajout de 3 resultats,", () => {
    beforeEach(() => {
      // init le service avec 3 resultats
    });

    it("devrait avoir une liste de 3 resultats non vue aprés l\'ajout de 3 resultat.", () => {
      expect(false).toEqual(true);
    });

    it("ne devrait pas authorisé l'ajout d'un résultats avec un id existent", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir 1 resultats vue dans la liste aprés la vision d\'un resultat", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir les 3 resultats vue dans la liste aprés qu\'il soit tous vue", () => {
      expect(false).toEqual(true);
    });

    it("devrait avoir plus que 2 resultats vue dans la liste aprés qu\'il soit tous vue puis 1 ou la vue est enlevé", () => {
      expect(false).toEqual(true);
    });

    it("ne devrait pas planté aprés la vision d\'un resultat non ajouté", () => {
      expect(false).toEqual(true);
    });
  });


  /* step 3 (evenement) */


  /* proposé de nouveau test */

});
