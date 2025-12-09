import{j as e}from"./iframe-BJQsUCMR.js";import{$ as c}from"./Form-Cc0eM_JQ.js";import{G as d}from"./Grid-g9pTFMTI.js";import{G as i}from"./GridItem-ryJkEy6E.js";import{T as t}from"./TextField-BtKYX_SG.js";import{S as l}from"./Select-Bauh63xs.js";import{B as a}from"./Button-Cuv97NKO.js";import{R as x,a as u}from"./Radio-DWEcTmyY.js";import{C as I}from"./CheckboxGroup-DbxXU_zo.js";import{C as G}from"./Checkbox-C5Ftf7nc.js";import{L as p}from"./ListBoxItem-Cgd8Q8QZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cr7K8WJR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BiEbn1a3.js";import"./useFocusRing-DlRtsXUX.js";import"./index-B-fdDFbP.js";import"./index-BHjUdtJS.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D-Ru2v7l.js";import"./TextField-fCjjWraL.js";import"./FieldError-zgxijUai.js";import"./Text-Cc4_9gUZ.js";import"./Text-BimK0k6U.js";import"./RSPContexts-BI01sb8g.js";import"./Group-DQusP5OH.js";import"./Input-BV3-DR8v.js";import"./Hidden-o6EY_DbG.js";import"./Button-BQ9IF-8b.js";import"./useLabels-BH12XE_O.js";import"./useButton-CrSiIYdq.js";import"./useTextField-pZ61dwV1.js";import"./useControlledState-DJCuFP0v.js";import"./useField-CaQW11iG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BL_6rRp2.js";import"./Dialog-BzC6JDiP.js";import"./OverlayArrow-CVLixwYq.js";import"./useResizeObserver-0JCOC-KO.js";import"./Collection-uC_HUdxp.js";import"./index-CgFsjumR.js";import"./Separator-DHPzP9m9.js";import"./SelectionManager-DAa-cbbJ.js";import"./useEvent-DG3fzSzi.js";import"./scrollIntoView-DB1hrIB-.js";import"./SelectionIndicator-BBOdvufD.js";import"./useDescription-CKj4G0W7.js";import"./ListKeyboardDelegate-Bka3ub3I.js";import"./PressResponder-D2a5bvYe.js";import"./useLocalizedStringFormatter-CePtc58O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DhO5ZbSM.js";import"./VisuallyHidden-CIBvHJ7K.js";import"./x-DY2fwmz2.js";import"./createLucideIcon-DwyOL3g6.js";import"./useLocalizedStringFormatter-BMFy_0c_.js";import"./Heading-puME5rnC.js";import"./info--lUqQmMo.js";import"./Popover-6d4uiwK_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-COMbfssa.js";import"./DragAndDrop-CsGG6Liv.js";import"./inertValue-CZLCeDlZ.js";import"./useListState-B21_MFZ2.js";import"./Tag-Bs4bGDVi.js";import"./useHighlightSelectionDescription-BjtDieii.js";import"./useUpdateEffect-i2qLDwrx.js";import"./useHasTabbableChild-DZ_ozO1g.js";import"./chevron-down-DJANP6dw.js";import"./Button.module-Co5e5YHp.js";import"./check-BPdW4aI6.js";import"./useToggleState-BX8cW40x.js";import"./Virtualizer-Cft53BHH.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
