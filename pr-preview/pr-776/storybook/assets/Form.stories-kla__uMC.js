import{j as n}from"./iframe-BtHAbfQi.js";import{$ as j}from"./Form-CzMGWBV_.js";import{G}from"./Grid-DPy1X2Ds.js";import{G as e}from"./GridItem-_tiOjxRS.js";import{T as r}from"./TextField-yqK4Bp5u.js";import{S as I}from"./Select-w3Ix7F5i.js";import{B as a}from"./Button-DTqGAWIE.js";import{R as g,a as b}from"./Radio-0Faot-pI.js";import{C as h}from"./CheckboxGroup-TuS7DgFV.js";import{C as k}from"./Checkbox-C73klJmV.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CI5guydw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BGCPQhgl.js";import"./useFocusRing-jJNkjwNI.js";import"./index-DFSGV4KU.js";import"./index-BdY0_Drk.js";import"./TextFieldBase-DP78Weo0.js";import"./TextField-DN0yM9WD.js";import"./FieldError-D3lUr5XF.js";import"./Text-Bm462RwY.js";import"./Text-DJh8MHEG.js";import"./ListKeyboardDelegate-DHKgAdQ7.js";import"./SelectionManager-BpZkQJRp.js";import"./useEvent-BpKUv2gF.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C1Zbpea5.js";import"./useDescription-Bjs9dqG9.js";import"./useControlledState-DD54qExZ.js";import"./Group-DkL0aVz1.js";import"./Input-DE9MRfWf.js";import"./Hidden-p56AY048.js";import"./Button-D0nH7SId.js";import"./useLabels-zQrxNUcg.js";import"./useButton-CiWWNuEx.js";import"./useTextField-CoLzxZnw.js";import"./useField-DfcCQcwp.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CVVyV4ZY.js";import"./Dialog-DCN2jBEc.js";import"./RSPContexts-B0h--UYE.js";import"./OverlayArrow-Do6ae_z2.js";import"./useResizeObserver-BpZ3vhAF.js";import"./Collection-DGbZqiYR.js";import"./index-D3kd15N4.js";import"./Separator-CnGPWReQ.js";import"./PressResponder-XxsqDKA-.js";import"./useLocalizedStringFormatter-BH8ilO4d.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DPDc50kR.js";import"./Dialog-Vg0TGX1L.js";import"./useLocalizedStringFormatter-DsNAzYee.js";import"./x-BoW_yzrz.js";import"./createLucideIcon-CdFhLFE8.js";import"./Heading-NiwI8Sug.js";import"./info-CffwVU60.js";import"./Tag-BkLAdfMt.js";import"./ListBox-B3DOiZaK.js";import"./DragAndDrop-BdDsxiS2.js";import"./inertValue-nvEkpT0H.js";import"./useListState-CSUm39HB.js";import"./useHighlightSelectionDescription-BKiBzbgT.js";import"./useUpdateEffect-DIUW6sl6.js";import"./useHasTabbableChild-C2qP6sFJ.js";import"./check-LFL8oXkt.js";import"./ListBoxSection-CMTKsS3V.js";import"./Virtualizer-Dy79dM9l.js";import"./useObserveElement-B5bJEDtn.js";import"./chevron-down-C2MZ8qcd.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-UV5gMt3A.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
