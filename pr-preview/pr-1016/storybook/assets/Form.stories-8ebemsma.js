import{j as e}from"./iframe-Cy1O8yWi.js";import{$ as c}from"./Form-p9AgarO5.js";import{G as d}from"./Grid-GLWlqA7K.js";import{G as i}from"./GridItem-tv6voxK9.js";import{T as t}from"./TextField-ixnbWg3E.js";import{S as l}from"./Select-BvvnbtyJ.js";import{B as a}from"./Button-CD-tfith.js";import{R as x,a as u}from"./Radio-BJCobTYN.js";import{C as I}from"./CheckboxGroup-BT4lqZWA.js";import{C as G}from"./Checkbox-C8sL7oYZ.js";import{L as p}from"./ListBoxItem-036FttQj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BjVRslkV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-JJdJbyT_.js";import"./useFocusRing-Bp1jLS3U.js";import"./index-5ACCliHA.js";import"./index-Cyzr7w3M.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BQ0A30ci.js";import"./TextField-DyJEl0Mx.js";import"./FieldError-CYJiMFhF.js";import"./Text-BhW5Vg2W.js";import"./Text-BQ9CxdIy.js";import"./RSPContexts-DYATOnMx.js";import"./Group-BgR_avYf.js";import"./Input-AxKI_jjI.js";import"./Hidden-DfJC5d3o.js";import"./Button-D7uf2_z0.js";import"./useLabels-BdY4SXxc.js";import"./useButton-MFlutIw_.js";import"./useTextField-D4oWV2sN.js";import"./useControlledState-CGXlN-Wm.js";import"./useField-DKhAEfz8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BHC0llIC.js";import"./Dialog-CmYRx3W9.js";import"./OverlayArrow-BeQMntv7.js";import"./useResizeObserver-BVD-DuOZ.js";import"./Collection-DE8F0J6D.js";import"./index-D0lRM3EA.js";import"./Separator-GeRgE_ub.js";import"./SelectionManager-B2hRycuL.js";import"./useEvent-BcfvInMW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcYJlAXq.js";import"./useDescription-dqHAgAeW.js";import"./ListKeyboardDelegate-0Mg55Vki.js";import"./PressResponder-BZp455IP.js";import"./useLocalizedStringFormatter-Cv53LFTg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CD3a7BGu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BDU5-Uv6.js";import"./x-DJ2qkTKw.js";import"./createLucideIcon-D6XDS7Dv.js";import"./useLocalizedStringFormatter-3W37BXaG.js";import"./Heading-L0-fmDPo.js";import"./info-BBEEJM3F.js";import"./Popover-TInVXXk9.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dk1FM7No.js";import"./DragAndDrop-4odexTmp.js";import"./inertValue-BDCHv1Ms.js";import"./useListState-DzxR9NdP.js";import"./Tag-DksyrKo2.js";import"./useHighlightSelectionDescription-Dvnnpmmv.js";import"./useUpdateEffect-Cu2sT7yK.js";import"./useHasTabbableChild-BUzTtPen.js";import"./chevron-down-CjmRu4Ha.js";import"./Button.module-Co5e5YHp.js";import"./check-YHeCWuqu.js";import"./useToggleState-BcE9R_VW.js";import"./Virtualizer-Dc72voU8.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
