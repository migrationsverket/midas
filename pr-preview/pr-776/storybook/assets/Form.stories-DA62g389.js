import{j as n}from"./iframe-CvXLfF_q.js";import{$ as j}from"./Form-RXPj2kza.js";import{G}from"./Grid-TD6eRHRh.js";import{G as e}from"./GridItem-B9UbnL_M.js";import{T as r}from"./TextField-Wdgh-r_5.js";import{S as I}from"./Select-CnX6-KAD.js";import{B as a}from"./Button-C5offM08.js";import{R as g,a as b}from"./Radio-CWSoDDw1.js";import{C as h}from"./CheckboxGroup-DUi03ezR.js";import{C as k}from"./Checkbox-DzwhnV4u.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BO9tHePg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-m8YFgRAn.js";import"./useFocusRing-Dkk5pHgn.js";import"./index-bGVzQcYJ.js";import"./index-C7WGyVe8.js";import"./TextFieldBase-T1PKAETr.js";import"./TextField-BwWhLklO.js";import"./FieldError-BSmnFXu6.js";import"./Text-BB2QvOPj.js";import"./Text-CoM9v5Yc.js";import"./ListKeyboardDelegate-6KNXhNiy.js";import"./SelectionManager-DrHdJ81Z.js";import"./useEvent-CyJvjCuv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CIM936_K.js";import"./useDescription-DfZu2Tdo.js";import"./useControlledState-DJIgnqjn.js";import"./Group-ByRO-4O9.js";import"./Input-Dqj0lSCR.js";import"./Hidden-D9TBDvEX.js";import"./Button-DuOxkN_z.js";import"./useLabels-DU0_Q9NE.js";import"./useButton-DiOUPaD7.js";import"./useTextField-B8YEsECb.js";import"./useField-D7L2p-JC.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-BbgwFzf-.js";import"./Dialog-BbGkIIqA.js";import"./RSPContexts-DDrWE1il.js";import"./OverlayArrow-B_XPI8i2.js";import"./useResizeObserver-C5VMI_Ht.js";import"./Collection-CReGmjXs.js";import"./index-CaHkNvi3.js";import"./Separator-4w49e6pF.js";import"./PressResponder-CHzw35RA.js";import"./useLocalizedStringFormatter-B7iV-Ktc.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bjf7xjqc.js";import"./Dialog-BsvGe5wm.js";import"./useLocalizedStringFormatter-DlDWACDM.js";import"./x-BTUMAxJS.js";import"./createLucideIcon-GP4wNw-1.js";import"./Heading-CW8K9TmY.js";import"./info-CuiA1TJi.js";import"./Tag-KZTnjdzz.js";import"./ListBox-CoDe6PtQ.js";import"./DragAndDrop-CrTaUfdZ.js";import"./inertValue-SClefERU.js";import"./useListState-x708TW5Z.js";import"./useHighlightSelectionDescription-CO_l4ebe.js";import"./useUpdateEffect-C5q4m3jo.js";import"./useHasTabbableChild-CGcBxyAo.js";import"./check-BjB19WAJ.js";import"./ListBoxSection-DeiwmH_C.js";import"./Virtualizer-CIWxxRgf.js";import"./useObserveElement-DzCN-ohI.js";import"./chevron-down-C8ktB_4g.js";import"./Button.module-9Myim2MN.js";import"./useToggleState-eVXnD06Z.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
