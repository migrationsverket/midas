import{j as n}from"./iframe-ClwCrMCh.js";import{$ as j}from"./Form-BEupm8wi.js";import{G}from"./Grid-DxIE99Ey.js";import{G as e}from"./GridItem-1mDr1GC4.js";import{T as r}from"./TextField-DHMDhlqw.js";import{S as I}from"./Select-D0yGIWFL.js";import{B as a}from"./Button-VAjavxJL.js";import{R as g,a as b}from"./Radio-C8inoTsX.js";import{C as h}from"./CheckboxGroup-DNHR3dnT.js";import{C as k}from"./Checkbox-7wIQkF8R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-VSbBK2zM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CBnCEpGT.js";import"./useFocusRing-BTHwzkbZ.js";import"./index-B9pL1clj.js";import"./index-CfSoyt6A.js";import"./TextFieldBase-DvsRSGA3.js";import"./TextField-LakivcRy.js";import"./FieldError-Bhm247gi.js";import"./Text-DlIE_kgH.js";import"./Text-rwB8MEL1.js";import"./ListKeyboardDelegate-a6QwTknO.js";import"./SelectionManager-CSxxKIJC.js";import"./useEvent-BwlyTvI1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D0p23-rG.js";import"./useDescription-BUH_WvtX.js";import"./useControlledState-CQZBHuFz.js";import"./Group-DpNDOzEb.js";import"./Input-B-DHC-vU.js";import"./Hidden-BwKZ8Q62.js";import"./Button-B3cip3Jz.js";import"./useLabels-CuKI6rRu.js";import"./useButton-B5yp-EEv.js";import"./useTextField-C__0xXyf.js";import"./useField-CNMnXxDZ.js";import"./TextField.module-DjUItNl5.js";import"./Label-BH5R3Eb1.js";import"./Dialog-CaevIVmb.js";import"./RSPContexts-DphtOkMb.js";import"./OverlayArrow-CITOp8Iv.js";import"./useResizeObserver-OcaO8Fcp.js";import"./Collection-nmyIvCAc.js";import"./index-DvTJ1Buw.js";import"./Separator-DXpOCI_O.js";import"./PressResponder-BlmRY1mH.js";import"./useLocalizedStringFormatter-DPMBJlWy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-vVKtHgbb.js";import"./Dialog-Czym9q_D.js";import"./useLocalizedStringFormatter-57bhvwxn.js";import"./x-D7SFdfPJ.js";import"./createLucideIcon-QXatZoBu.js";import"./Heading-CqgQh17F.js";import"./info-Cxv-s5hN.js";import"./Tag-prqts_xN.js";import"./ListBox-lheEyKD8.js";import"./DragAndDrop-D1jTigOZ.js";import"./inertValue-DWWFPr5y.js";import"./useListState-D10-EtjW.js";import"./useHighlightSelectionDescription-CjG09q7Q.js";import"./useUpdateEffect-CnABPAMC.js";import"./useHasTabbableChild-DE50saGj.js";import"./check-B6PiMElD.js";import"./ListBoxSection-DFlzC8pi.js";import"./Virtualizer-BnrtqJGs.js";import"./useObserveElement-Cr1QsKGt.js";import"./chevron-down-CNBbLglm.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BkEO80KL.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
