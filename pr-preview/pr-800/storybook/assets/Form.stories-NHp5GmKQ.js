import{j as n}from"./iframe-PziQzjLy.js";import{$ as j}from"./Form-DTr1C88l.js";import{G}from"./Grid-BtuSx66J.js";import{G as e}from"./GridItem--GyvouU0.js";import{T as r}from"./TextField-2Pp0Bv45.js";import{S as I}from"./Select-DMkLzl_l.js";import{B as a}from"./Button-CpZxQ65s.js";import{R as g,a as b}from"./Radio-DiakyC-G.js";import{C as h}from"./CheckboxGroup-CoVfiMod.js";import{C as k}from"./Checkbox-CWJlooYm.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-kgF4Z0H4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DqX5l7Yz.js";import"./useFocusRing-DH6Di2KW.js";import"./index-DwxE06TF.js";import"./index-CdOlcchz.js";import"./TextFieldBase-B_Nebcid.js";import"./TextField-Dkn7t1Ns.js";import"./FieldError-DMOlBQwb.js";import"./Text-yxX512Ny.js";import"./Text-CZeePoP1.js";import"./ListKeyboardDelegate-CXW1u9bl.js";import"./SelectionManager-Br5R-cyE.js";import"./useEvent-BiuwVzFX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BEdqQor8.js";import"./useDescription-ym9PWChI.js";import"./useControlledState-qUTcE_91.js";import"./Group-BHBJ7_OK.js";import"./Input-C9lRKNNz.js";import"./Hidden-tcrjPXId.js";import"./Button-CqK5psxG.js";import"./useLabels-C9faUJhU.js";import"./useButton-BrtDBiaB.js";import"./useTextField-B7aYQdX-.js";import"./useField-C3bE86F2.js";import"./TextField.module-DjUItNl5.js";import"./Label-BQFS90oX.js";import"./Dialog-B5PJbCNl.js";import"./RSPContexts-DxCvks7v.js";import"./OverlayArrow-Cl26yo4d.js";import"./useResizeObserver-BRZ2iIvU.js";import"./Collection-DWrAxGG2.js";import"./index-B-nEYSsa.js";import"./Separator-DsNXqdhn.js";import"./PressResponder-ByZxsR0J.js";import"./useLocalizedStringFormatter-tItjUNDL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DPX5akHi.js";import"./Dialog-IQ4KALhq.js";import"./useLocalizedStringFormatter-BOA5_uc2.js";import"./x-CqaNCiSm.js";import"./createLucideIcon-DbrVSiBM.js";import"./Heading-DJQWzkPh.js";import"./info-BftjfKuf.js";import"./Tag-CQeveMlN.js";import"./ListBox-BiPYAGCG.js";import"./DragAndDrop-C68jDHz_.js";import"./inertValue-Dt47w8_t.js";import"./useListState-GjGnj1Pw.js";import"./useHighlightSelectionDescription-0TpLEzRv.js";import"./useUpdateEffect-BiyhEKw2.js";import"./useHasTabbableChild-DyaaxGeg.js";import"./check-BqC__JJi.js";import"./ListBoxSection-q20tb0l8.js";import"./Virtualizer-Cm_vFcUl.js";import"./useObserveElement-N_752GQs.js";import"./chevron-down-nI51fD6e.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DDwKgnwM.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
