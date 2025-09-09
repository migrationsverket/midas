import{j as n}from"./iframe-DNAyzcVz.js";import{$ as j}from"./Form-BjruztWD.js";import{G}from"./Grid-BYxtSYcI.js";import{G as e}from"./GridItem-Blla0zQW.js";import{T as r}from"./TextField-zJmY9GKr.js";import{S as I}from"./Select-G_7QdPJs.js";import{B as a}from"./Button-SOtf5iPG.js";import{R as g,a as b}from"./Radio-DIB32lxg.js";import{C as h}from"./CheckboxGroup-uskvVALi.js";import{C as k}from"./Checkbox-tnOasmnp.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CNQS-LpM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D62vz49M.js";import"./useFocusRing-DM6kavp9.js";import"./index-CHAGpYiP.js";import"./index-sCxWtgC3.js";import"./TextFieldBase-D7Vlls8y.js";import"./TextField-eezPuS2A.js";import"./FieldError-8yFG4BGg.js";import"./Text-mtz4kNOG.js";import"./Text-DBiN9mwX.js";import"./ListKeyboardDelegate-CIr6DTWw.js";import"./SelectionManager-DpKY-03r.js";import"./useEvent-0qriikFe.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-KzgDKKhi.js";import"./useDescription-D_LiQCEA.js";import"./useControlledState-Lxd1KpOq.js";import"./Group-BSW069zn.js";import"./Input-kmqnRsGU.js";import"./Hidden-B6uiJ18c.js";import"./Button-B3iMlVBT.js";import"./useLabels-vHETDrlq.js";import"./useButton-C3aHppAl.js";import"./useTextField-WPelAKg7.js";import"./useField-Bcv7mbye.js";import"./TextField.module-8oYDuXgF.js";import"./Label-D0B2e1Ka.js";import"./Dialog-CDlSqvlc.js";import"./RSPContexts-D2_HP19L.js";import"./OverlayArrow-SFhS_fY4.js";import"./useResizeObserver-IKwp_da3.js";import"./Collection-DNBxWvd9.js";import"./index-DDw_trIg.js";import"./Separator-CEHhaLna.js";import"./PressResponder-BGcdQZpq.js";import"./useLocalizedStringFormatter-DUvd8EfB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BbMLFuJ5.js";import"./Dialog-DiIli4kB.js";import"./useLocalizedStringFormatter-B7iogkfy.js";import"./x-CktLMlWO.js";import"./createLucideIcon-CfKTp8Xu.js";import"./Heading-Dt9eeouW.js";import"./info-D5SjlQcK.js";import"./Tag-CcGM8KI7.js";import"./ListBox-CoCXmzYb.js";import"./DragAndDrop-DchV-cSa.js";import"./inertValue-Btme8ZZP.js";import"./useListState-B2YajGoU.js";import"./useHighlightSelectionDescription-D_qarWQ9.js";import"./useUpdateEffect-Cl4oBGlx.js";import"./useHasTabbableChild-BasuSkS7.js";import"./check-B_dxYYGw.js";import"./ListBoxSection-D1lOqQBZ.js";import"./Virtualizer-_EVAz019.js";import"./useObserveElement-FGHQHLq6.js";import"./chevron-down-BKmFZkAD.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-VPKd_oAz.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
