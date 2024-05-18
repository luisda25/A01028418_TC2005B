
/*
Mange the flow of the Simon Game
Keep track of the turn, and the list of buttons to press

Luis Daniel Filorio Luna A01028418
*/

using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

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
    [SerializeField] TMP_Text scorelevel;
    [SerializeField] TMP_Text GameOverText;
    [SerializeField] TMP_Text HighestLevelText;
    [SerializeField] float delayDecrease = 0.1f;
    [SerializeField] float delayMin = 0.1f;
    private int highestLevel;
    
    public string apiData = @"
    {
        ""buttons"": [
            {
                ""id"": 0,
                ""r"": 1.0,
                ""g"": 0,
                ""b"": 0.5
            }
        ]
    }
    ";

    public ColorButtons allButtons;

    // Start is called before the first frame update
    void Start()
    {
        delay = 1.0f;
        level = 1;
        highestLevel = 1;
        scorelevel.text = "Level: " + level.ToString();
        HighestLevelText.text = "Highest Level: " + highestLevel.ToString();
        //PrepareButtons();
        GetComponent<APIConnection>().GetData();
    }

    public void PrepareButtons()
    {
        // Convert the json string into an object
        allButtons = JsonUtility.FromJson<ColorButtons>(apiData);

        foreach (ColorButton buttonData in allButtons.buttons)
        {
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = new Color(buttonData.r, buttonData.g, buttonData.b);
            newButton.GetComponent<SimonButton>().Init(buttonData.id);
            buttons.Add(newButton.GetComponent<SimonButton>());
            newButton.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(buttonData.id));
        }
        //for (int i = 0; i < numButtons; i++) {
            //int index = i;
            // Create a new button and add it to the list
           // GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            //newButton.GetComponent<Image>().color= Color.HSVToRGB((float)index / numButtons, 1, 1);
            //newButton.GetComponent<SimonButton>().Init(index);
            //buttons.Add(newButton.GetComponent<SimonButton>());
         //   buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
        //}
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
                    if (level > highestLevel) {
                        highestLevel = level;
                        HighestLevelText.text = "Highest Level: " + highestLevel.ToString();
                    }
                    delay = Mathf.Max(delayMin, delay - delayDecrease);
                    if (delay <= 0) {
                        delay = delayMin;
                    }
                    scorelevel.text = "Level: " + level.ToString();
                    counter = 0;
                    AddToSequence();
                }
            } else {
                GameOverText.text = "Game Over!";   
                Debug.Log("Game Over!");
            }
        }
    }

    public void ResetGame()
    {
        sequence.Clear();
        level = 1;
        scorelevel.text = "Level: " + level.ToString();
        GameOverText.text = "";
        counter = 0;
        playerTurn = false;
        delay = 1.0f;
        AddToSequence();
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
