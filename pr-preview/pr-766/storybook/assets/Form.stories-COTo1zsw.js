import{j as n}from"./iframe-Fl_BsjrG.js";import{$ as j}from"./Form-NsilMC_X.js";import{G}from"./Grid-awSobOGs.js";import{G as e}from"./GridItem-GnDsjX6i.js";import{T as r}from"./TextField-DQ9iId_g.js";import{S as I}from"./Select-BQtvkgd8.js";import{B as a}from"./Button-CnjGMK4n.js";import{R as g,a as b}from"./Radio-BOXB7jfG.js";import{C as h}from"./CheckboxGroup-DgirxNrZ.js";import{C as k}from"./Checkbox-C1TPQJJX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BrHRahVf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dn1ruAqN.js";import"./useFocusRing-DYdW2VFR.js";import"./index-CkFKq3jr.js";import"./index-tuhqkb4G.js";import"./TextFieldBase-BHAORPcy.js";import"./TextField-DWav8ndq.js";import"./FieldError-tfAmIXjc.js";import"./Text-B8SLTmRI.js";import"./Text-zw6G2c9V.js";import"./Input-BIgYyjck.js";import"./Hidden-BkBuru2Y.js";import"./Button-Bdov08rV.js";import"./useLabels-B5skQI7a.js";import"./useButton-B_vEwI5C.js";import"./useTextField-Cp7f80Zl.js";import"./useControlledState-Awo6lhLf.js";import"./useField-CdNAY7L5.js";import"./TextField.module-BrIGiDQC.js";import"./Label-DWyikURi.js";import"./Dialog-CbU4pZkH.js";import"./RSPContexts-FBcIKOm5.js";import"./OverlayArrow-BSrMB4Hp.js";import"./useResizeObserver-BapLhx13.js";import"./Collection-DTKD83D6.js";import"./index-DWwgF7t_.js";import"./Separator-Cs5tIHeH.js";import"./SelectionManager-DUnM369Y.js";import"./useEvent-Bkts_nWB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-XL_pJlfp.js";import"./useDescription-DGXrC1gQ.js";import"./ListKeyboardDelegate-B3bL0Ozr.js";import"./PressResponder-CuYYthZ0.js";import"./useLocalizedStringFormatter-CJfvcTm2.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CNTF2EAy.js";import"./Dialog-ZCeApply.js";import"./useLocalizedStringFormatter-VdOQxIoV.js";import"./x-CY2NNW4j.js";import"./createLucideIcon-BQImOslD.js";import"./Heading-Cko4ESt5.js";import"./info-BmyFZSui.js";import"./Tag-S9d-50WX.js";import"./ListBox-DDPFaSUX.js";import"./DragAndDrop-BWy9XGwv.js";import"./inertValue-C3vsjVBV.js";import"./useListState-BDo26vJY.js";import"./useHighlightSelectionDescription-Dxl87klZ.js";import"./useUpdateEffect-DjjNXAWU.js";import"./useHasTabbableChild-BWRTnP2k.js";import"./check-B8lKnN07.js";import"./ListBoxSection-BKxlSMqF.js";import"./Virtualizer-B6liMTsJ.js";import"./useObserveElement-DV6ylJ98.js";import"./chevron-down-qiWx_eo6.js";import"./Button.module-CF2bVDCq.js";import"./Group-CqXnAOln.js";import"./useToggleState-BYzhTLe1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
