import{j as e}from"./iframe-CjsN2Sbl.js";import{$ as c}from"./Form-ZhegcCUs.js";import{G as d}from"./Grid-H52LjlTP.js";import{G as i}from"./GridItem-SYy9bbNg.js";import{a as x,R as u}from"./Radio-Cv35VY0f.js";import{C as I}from"./CheckboxGroup-B-8-YPF_.js";import{C as G}from"./Checkbox-CSviWfbN.js";import{T as t}from"./TextField-WFwr_4ul.js";import{S as l}from"./Select-Cy_UX-aZ.js";import{L as p}from"./ListBoxItem-DdWdZBiL.js";import{B as a}from"./Button-BvGYLpp9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COI7mk-Z.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CraaeZ4V.js";import"./useFocusRing-DiEIFPwp.js";import"./index-CKo9uiwm.js";import"./index-B8NePwnw.js";import"./clsx-Ciqy0D92.js";import"./Group-DeYpntjE.js";import"./FieldError-CrPR-bnN.js";import"./Text-BQK0eZgF.js";import"./Text-CSqjNMss.js";import"./Button-CJVqDdWG.js";import"./Hidden-B_kzivom.js";import"./useLabels-CwB4JwE6.js";import"./useButton-qnOMufHE.js";import"./SelectionIndicator-Dtxpd41E.js";import"./useField-B0YexPGJ.js";import"./VisuallyHidden-CfSP2Ia7.js";import"./useControlledState-pLjBfoN3.js";import"./Label-B5jVEWx5.js";import"./Dialog-4ubmlTtR.js";import"./RSPContexts-DwL8agvn.js";import"./OverlayArrow-wTzyx3Y4.js";import"./useResizeObserver-DD03rVkz.js";import"./Collection-kM4C1fOf.js";import"./index-eAOazQnS.js";import"./Separator-BwxmNEHY.js";import"./SelectionManager-kGv9cFEb.js";import"./useEvent-BAcO_i_L.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-1l4I4YYw.js";import"./ListKeyboardDelegate-BcdPtsBu.js";import"./PressResponder-DrkEnSpk.js";import"./useLocalizedStringFormatter-BbQDdHsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfFuG-Eb.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DkVq0ORE.js";import"./createLucideIcon-CiVnvI1n.js";import"./useLocalizedStringFormatter-BnIikKMu.js";import"./Heading-2FBT4Xcv.js";import"./info-D1FV45cc.js";import"./Popover-D_bZvvuO.js";import"./check-CSNsukEx.js";import"./useToggleState-CrtNWSV2.js";import"./TextFieldBase-BcVSnZL2.js";import"./TextField-tAY5WO05.js";import"./Input-Bq4Vqqpd.js";import"./useTextField-NUC4aX3Z.js";import"./TextField.module-DPkQCx_c.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CH9vRJ9S.js";import"./DragAndDrop-B5J7ZTaQ.js";import"./inertValue-DEq0fbpc.js";import"./useListState-ChqyNRki.js";import"./Tag-D_blGLGl.js";import"./useHighlightSelectionDescription-Bu-yVib-.js";import"./useUpdateEffect-DdZDUQUD.js";import"./useHasTabbableChild-s2VQgOzz.js";import"./chevron-down-ClW9CyCx.js";import"./Virtualizer-DWsa0qzL.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
