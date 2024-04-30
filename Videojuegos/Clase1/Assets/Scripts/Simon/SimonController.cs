
/*
Mange the floew of the Simon Game
Keep track of the turn, and the list of buttons to press

Luis Daniel Filorio Luna A01028418
*/

using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using UnityEngine;
using UnityEngine.UI;

public class SimonController : MonoBehaviour
{
    [SerializeField] List<SimonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;
    [SerializeField] int counter = 0;
    [SerializeField] int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;


    // Start is called before the first frame update
    void Start()
    {
        PrepareButtons();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void PrepareButtons()
    {
        for (int i = 0; i < numButtons; i++) {
            int index = i;
            // Create a new button and add it to the list
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color= Color.HSVToRGB((float)index / numButtons, 1, 1);
            newButton.GetComponent<SimonButton>().Init(index);
            buttons.Add(newButton.GetComponent<SimonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        }
        // Start the game by adding the first button
        AddToSequence();
    }

    public void ButtonPressed(int index)
    {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                buttons[index].Highlight();
                if (counter == sequence.Count) {
                    playerTurn = false;
                    level++;
                    counter = 0;
                    AddToSequence();
                }
            } else {    
                Debug.Log("Game Over!");
            }
        }
    }

    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence()
    {
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);
        }
        playerTurn = true;
    }
}
