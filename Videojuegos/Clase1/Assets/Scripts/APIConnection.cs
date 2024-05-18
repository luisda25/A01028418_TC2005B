/*
Make requests to an API to get the data for the game

Luis Daniel Filorio Luna A01028418
2024-05-14
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class APIConnection : MonoBehaviour
{
    [SerializeField] string url;
    [SerializeField] string getEndpoint;

    SimonController controller;

    // Start is called before the first frame update
    void Start()
    {
        controller = GetComponent<SimonController>();
    }
    
    public void GetData()
    {
        StartCoroutine(RequestGet(url + getEndpoint));
    }

    IEnumerator RequestGet(string url)
    {
        using(UnityWebRequest www = UnityWebRequest.Get(url))
            {
                yield return www.SendWebRequest();
                if (www.result != UnityWebRequest.Result.Success)
                {
                    Debug.Log(www.error);
                }
                else
                {
                    string result = www.downloadHandler.text;
                    Debug.Log(result);
                    // Start the process to create the simon buttons
                    controller.apiData = result;
                    controller.PrepareButtons();

                }
            }
    }
}
