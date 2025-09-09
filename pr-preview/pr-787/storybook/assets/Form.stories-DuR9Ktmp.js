import{j as n}from"./iframe-CBtjtHKW.js";import{$ as j}from"./Form-BvNMhnoJ.js";import{G}from"./Grid-DfU-2IwT.js";import{G as e}from"./GridItem-COkpr7Ho.js";import{T as r}from"./TextField-BxFCRAmh.js";import{S as I}from"./Select-DLebcx0a.js";import{B as a}from"./Button-8HXSqZ2q.js";import{R as g,a as b}from"./Radio-BD0xc1G6.js";import{C as h}from"./CheckboxGroup-DZLN2_6X.js";import{C as k}from"./Checkbox-hmdeHI6n.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-QvJdaxzg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CoEkSMkC.js";import"./useFocusRing-DinxyWal.js";import"./index-BssfbpjP.js";import"./index-C41oDLSi.js";import"./TextFieldBase-B6bbbYDv.js";import"./TextField-RXyGbKlX.js";import"./FieldError-DqdQ08XR.js";import"./Text-Bgw7YlHe.js";import"./Text-BMsnA4kV.js";import"./ListKeyboardDelegate-DXwPWcg6.js";import"./SelectionManager-BZc0lYHi.js";import"./useEvent-BoC4rZnS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CzJzx3k-.js";import"./useDescription-B4peZynu.js";import"./useControlledState-BRbyL23i.js";import"./Group-DYy5DBn-.js";import"./Input-D2VBZAEz.js";import"./Hidden-CTTqRjtB.js";import"./Button-Xod_o4VM.js";import"./useLabels-dP_aUCHm.js";import"./useButton-DudYTjji.js";import"./useTextField-ZyRYDKQN.js";import"./useField-BuqXhNk7.js";import"./TextField.module-8oYDuXgF.js";import"./Label-3f2_VVOo.js";import"./Dialog-C5kE_Dec.js";import"./RSPContexts-B9gNNZxC.js";import"./OverlayArrow-BPGtDYPM.js";import"./useResizeObserver-ClC3kmZ6.js";import"./Collection-DNMzggl5.js";import"./index-2ovIgTr4.js";import"./Separator-BdB4vYJE.js";import"./PressResponder-BCisfaiH.js";import"./useLocalizedStringFormatter-Dwf33vuh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CTu0sdRk.js";import"./Dialog-D3yFW0Hi.js";import"./useLocalizedStringFormatter-DIsahmpG.js";import"./x-1z1Gc5mq.js";import"./createLucideIcon-Cj98Krtr.js";import"./Heading-BrrUbXj4.js";import"./info-DHLYlu2s.js";import"./Tag-CkANzlJ3.js";import"./ListBox-Dpw9Ehpg.js";import"./DragAndDrop-CStda5bH.js";import"./inertValue-CrfRE3hU.js";import"./useListState-sECa8Ng1.js";import"./useHighlightSelectionDescription-L1Fb7Leq.js";import"./useUpdateEffect-wXhV5ReN.js";import"./useHasTabbableChild-D_RWg0Gt.js";import"./check-CZXbRQsU.js";import"./ListBoxSection-dFCMjXlF.js";import"./Virtualizer-BHPKivt6.js";import"./useObserveElement-CyQEWNi5.js";import"./chevron-down-DrcPojt5.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-ocvv5ShL.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
