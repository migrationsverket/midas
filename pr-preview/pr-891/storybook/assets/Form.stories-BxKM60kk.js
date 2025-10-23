import{j as n}from"./iframe-BvtnbEWO.js";import{$ as p}from"./Form-DlbxRFTH.js";import{G as d}from"./Grid-9LkBFHt8.js";import{G as e}from"./GridItem-CdNTsffZ.js";import{T as r}from"./TextField-GQfSn3Ff.js";import{S as l}from"./Select-BlrOHcRK.js";import{B as a}from"./Button-DciKK2iU.js";import{R as c,a as x}from"./Radio-BGHkok6K.js";import{C as u}from"./CheckboxGroup-Chk6pVSa.js";import{C as G}from"./Checkbox-BG9y2DcX.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-Dmj49lEG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CFPInbMA.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-XjWg4yVB.js";import"./TextField-DHoRK5-k.js";import"./FieldError-DmVA7zlg.js";import"./Text-G_ihDvZJ.js";import"./Text-B7oxr1RI.js";import"./RSPContexts-BMp6jLpo.js";import"./Group-ZdvQrpSb.js";import"./Input-D1QGK8B0.js";import"./Hidden-B-AZDmCl.js";import"./Button-BDKaMgDI.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./useTextField-DMzI2iiY.js";import"./useControlledState-Dzlb7uXm.js";import"./useField-BnzoMeMJ.js";import"./TextField.module-suvedwZH.js";import"./Label-DtYzvuRw.js";import"./Dialog-SMibr7T8.js";import"./OverlayArrow-CjKqQivr.js";import"./useResizeObserver-BU-ZyiTP.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./scrollIntoView-CptB-SyI.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useDescription-3yaDVIih.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./PressResponder-DQRY-Kqq.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DAh1nnIS.js";import"./VisuallyHidden-DqvK4Wff.js";import"./useLocalizedStringFormatter-B6icmZu0.js";import"./x-B4WpRfld.js";import"./createLucideIcon-DLTmB58A.js";import"./Heading-BExRDS79.js";import"./info-C4RVpOnV.js";import"./Popover-lyKFTbo1.js";import"./Tag-CQecM679.js";import"./ListBox-DtidrHjR.js";import"./DragAndDrop-Da2BPJ6T.js";import"./inertValue-orH6NezI.js";import"./useListState-CFYSJQ23.js";import"./useHighlightSelectionDescription-BqU753u8.js";import"./useUpdateEffect-DZw5GxmE.js";import"./useHasTabbableChild-DVP5XgGP.js";import"./check-BU6uoXYK.js";import"./ListBoxSection-BqofAzjf.js";import"./Virtualizer-BsNUACvv.js";import"./chevron-down-ClR7GgM3.js";import"./Button.module-CtQ1deO8.js";import"./useToggleState-CfcMXvy9.js";const Vn={component:p,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(d,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(d,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(c,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(x,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(u,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(G,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Xn as __namedExportsOrder,Vn as default};
