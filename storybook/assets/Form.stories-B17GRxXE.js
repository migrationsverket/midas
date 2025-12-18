import{j as e}from"./iframe-CTgOJ9Ps.js";import{$ as c}from"./Form-CpKuv4-A.js";import{G as d}from"./Grid-fhiaDm0m.js";import{G as i}from"./GridItem-jSr8f-eA.js";import{T as t}from"./TextField-Dq_L-g_y.js";import{S as l}from"./Select-BEv9pIwc.js";import{B as a}from"./Button-BrzX4JOs.js";import{R as x,a as u}from"./Radio-JeyDAwUQ.js";import{C as I}from"./CheckboxGroup-B7hjtcdS.js";import{C as G}from"./Checkbox-FHLk-K4f.js";import{L as p}from"./ListBoxItem-2eCxVEW6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVlNRVKr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BvD8rtkG.js";import"./useFocusRing-X2jAZYAF.js";import"./index-CCWPqzcV.js";import"./index-BoZlgUKT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DdRf3zTQ.js";import"./TextField-BFyAA7x7.js";import"./FieldError-bycMJmoo.js";import"./Text-DcY7rHII.js";import"./Text-KKNDIRRs.js";import"./RSPContexts-CtkEES1X.js";import"./Group-BNcLlHyn.js";import"./Input-Bky8Da-S.js";import"./Hidden-BgNUkzG2.js";import"./Button-C-UPDMJV.js";import"./useLabels-A9HpFVJQ.js";import"./useButton-BHqm994R.js";import"./useTextField-DKDELgNf.js";import"./useControlledState-CFnILQr1.js";import"./useField-Dnh_8hCp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-SFdtHiVk.js";import"./Dialog-CnYvrznf.js";import"./OverlayArrow-XRtviRHN.js";import"./useResizeObserver-CKWpUOey.js";import"./Collection-A3cpZHrD.js";import"./index-DBJN-XyW.js";import"./Separator-BzZFj4xO.js";import"./SelectionManager-B9-wcfHY.js";import"./useEvent-DdPK42_P.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-cPAL-U0V.js";import"./useDescription-BAzN6H68.js";import"./ListKeyboardDelegate-CsMq0NaM.js";import"./PressResponder-CrP1xJZp.js";import"./useLocalizedStringFormatter-DYKfyeFk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3D8S1FJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMWuysUy.js";import"./x-B0Sr41AG.js";import"./createLucideIcon-8WvXNeel.js";import"./useLocalizedStringFormatter-uMvmKC8y.js";import"./Heading-ClW6Bag1.js";import"./info-CXxa3eYD.js";import"./Popover-BRuKbxpJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CJXijutO.js";import"./DragAndDrop-D8wIUenV.js";import"./inertValue-COhQz3Lm.js";import"./useListState-BvgNQilC.js";import"./Tag-CgrNy5ZQ.js";import"./useHighlightSelectionDescription-B-ErWN0W.js";import"./useUpdateEffect-C8pQHlZt.js";import"./useHasTabbableChild-BfRe6xUM.js";import"./chevron-down-DSv95ELV.js";import"./Button.module-Co5e5YHp.js";import"./check-W4BsXkTO.js";import"./useToggleState-Cwl5JS5_.js";import"./Virtualizer-Sx81h43h.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
