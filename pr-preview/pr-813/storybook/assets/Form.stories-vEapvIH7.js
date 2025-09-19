import{j as n}from"./iframe-DV1lFbk-.js";import{$ as j}from"./Form-BpG3AprQ.js";import{G}from"./Grid-DasaOYVU.js";import{G as e}from"./GridItem-C4gbsSOm.js";import{T as r}from"./TextField-CoJDAP4a.js";import{S as I}from"./Select-BUyBFdBv.js";import{B as a}from"./Button-CqFJNNhh.js";import{R as g,a as b}from"./Radio-DLkt-7_c.js";import{C as h}from"./CheckboxGroup-DdmL64ZD.js";import{C as k}from"./Checkbox-Da86eH1m.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DPmek7je.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BkqUFSHC.js";import"./useFocusRing-CsLNhNib.js";import"./index-Di62rkRw.js";import"./index-DlFKdktB.js";import"./TextFieldBase-DsHUNkSb.js";import"./TextField-ZxhDWcJn.js";import"./FieldError-DjMBr9cu.js";import"./Text-C3kGBtpF.js";import"./Text-D3CSulW4.js";import"./ListKeyboardDelegate-gM3tRXRF.js";import"./SelectionManager-qtxpI1RV.js";import"./useEvent-DxmA3sco.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-PfbXcW-j.js";import"./useDescription-BliB3ziN.js";import"./useControlledState-DqXyAVVz.js";import"./Group-CyGHkUEB.js";import"./Input-69cKPE5y.js";import"./Hidden-xHzPWZXF.js";import"./Button-9wFXHLyv.js";import"./useLabels-DzLQ80zN.js";import"./useButton-DBnso061.js";import"./useTextField-C5KfJA6K.js";import"./useField-C4CrTCGA.js";import"./TextField.module-DjUItNl5.js";import"./Label-kYHdtPyA.js";import"./Dialog-Bv2Mii9K.js";import"./RSPContexts-CxoGNjep.js";import"./OverlayArrow-88eYSq4d.js";import"./useResizeObserver-DSeBxN3u.js";import"./Collection-BAuLLdl3.js";import"./index-pUcrkXJD.js";import"./Separator-Ci__M8Jz.js";import"./PressResponder-BW7SC899.js";import"./useLocalizedStringFormatter-D-EKj6KL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-u_PmcxEg.js";import"./Dialog-C-7AGS0N.js";import"./useLocalizedStringFormatter-BOM8S7V7.js";import"./x-DKLM5s8R.js";import"./createLucideIcon-lt6rNZNA.js";import"./Heading-DSrQ1g1a.js";import"./info-Ck-IVZF-.js";import"./Tag-KEmB7UYB.js";import"./ListBox-2EXmby6M.js";import"./DragAndDrop-BJK6HjW-.js";import"./inertValue-5aHTmjEq.js";import"./useListState-B0EpRk15.js";import"./useHighlightSelectionDescription-BDqy_0ov.js";import"./useUpdateEffect-BJb9uZU7.js";import"./useHasTabbableChild-m4thNb7-.js";import"./check-BKPgZNLe.js";import"./ListBoxSection-Cy8eOo0c.js";import"./Virtualizer-CcEqrbVE.js";import"./useObserveElement-CfkWDBPC.js";import"./chevron-down-BTDoB7Hl.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DgC76UTn.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
