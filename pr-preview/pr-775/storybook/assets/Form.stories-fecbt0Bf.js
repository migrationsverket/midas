import{j as n}from"./iframe-Z79VDqKX.js";import{$ as j}from"./Form-BSNSBYHy.js";import{G}from"./Grid-CYfZM6vw.js";import{G as e}from"./GridItem-CNCTN2Wn.js";import{T as r}from"./TextField-D2rdI7xA.js";import{S as I}from"./Select-JNQ6eYCs.js";import{B as a}from"./Button-C3SD9ZWv.js";import{R as g,a as b}from"./Radio-Rpy8o_Wb.js";import{C as h}from"./CheckboxGroup-BZUXnrif.js";import{C as k}from"./Checkbox-BFv1orwO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DxDLenWG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CzOccdeJ.js";import"./useFocusRing-rIuhkSIP.js";import"./index-BuC1VbEJ.js";import"./index-BVIt5XrG.js";import"./TextFieldBase-BvdtOb01.js";import"./TextField-DXFYJB8X.js";import"./FieldError-213pJZQQ.js";import"./Text-DhPOzzhP.js";import"./Text-DjgExRej.js";import"./ListKeyboardDelegate-DQEyIGaq.js";import"./SelectionManager-eZvBMlfo.js";import"./useEvent-DZAQjmei.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DFFO9pl3.js";import"./useDescription-C6qD8aqf.js";import"./useControlledState-Be4wNWTN.js";import"./Group-BN_5xkGa.js";import"./Input-0Boue0VM.js";import"./Hidden-BsMX1HON.js";import"./Button-BcEoqYNl.js";import"./useLabels-BLzmafle.js";import"./useButton-B1_D8lLO.js";import"./useTextField-CqoHx-9W.js";import"./useField-CZ6EZrdb.js";import"./TextField.module-8oYDuXgF.js";import"./Label-ASOdum1o.js";import"./Dialog-rWguF1aS.js";import"./RSPContexts-C6InsJ4v.js";import"./OverlayArrow-Bw3qvQMt.js";import"./useResizeObserver-Cwjwp5JA.js";import"./Collection-pjn0zj9z.js";import"./index-C_WE830f.js";import"./Separator-DLPtSFBH.js";import"./PressResponder-BgHafGrx.js";import"./useLocalizedStringFormatter-Dv0xTpx0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BXZToMKu.js";import"./Dialog-hcQXW-bD.js";import"./useLocalizedStringFormatter-DwPrIOFn.js";import"./x-B_dtiCNY.js";import"./createLucideIcon-CsqV7L1R.js";import"./Heading-EoJBiDUV.js";import"./info-PkTCylJk.js";import"./Tag-Bkfkm2-X.js";import"./ListBox-KAAOUdi1.js";import"./DragAndDrop-CLefZ3Lc.js";import"./inertValue-C0ndbeFR.js";import"./useListState-Bn7fbnfz.js";import"./useHighlightSelectionDescription-C3oh_hPT.js";import"./useUpdateEffect-CiQ6v2jr.js";import"./useHasTabbableChild-Cjc11nLF.js";import"./check-CEw96Ce0.js";import"./ListBoxSection-PfdFuQd4.js";import"./Virtualizer-Be-6gv3D.js";import"./useObserveElement-BCQt5vGN.js";import"./chevron-down-BuBLbcVG.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-Cu4BqcEj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
