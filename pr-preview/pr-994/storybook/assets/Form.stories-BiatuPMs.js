import{j as e}from"./iframe-Cqv18ImU.js";import{$ as c}from"./Form-D8a6I2TO.js";import{G as d}from"./Grid-JG8Zd8xG.js";import{G as i}from"./GridItem-DURYLEUz.js";import{T as t}from"./TextField-CU3y_EOi.js";import{S as l}from"./Select-BXgdCHm6.js";import{B as a}from"./Button-DCnMOEqT.js";import{R as x,a as u}from"./Radio-DKe7pBAM.js";import{C as I}from"./CheckboxGroup-BGz986mH.js";import{C as G}from"./Checkbox-C3AAX_dW.js";import{L as p}from"./ListBoxItem-_v4amGRr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzbyOGZ_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DZCoeM0o.js";import"./useFocusRing-V1CF2lyh.js";import"./index-BZmzkW00.js";import"./index-Nt-ezTyj.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D2yfBXHm.js";import"./TextField-LeW0Hvuz.js";import"./FieldError-Cwk39N_k.js";import"./Text-B830MCwt.js";import"./Text-DteYonWN.js";import"./RSPContexts-DOgGE-X8.js";import"./Group-CeOj7dPo.js";import"./Input-GSo82qmm.js";import"./Hidden-D8Gg8WaH.js";import"./Button-CHZfUzDl.js";import"./useLabels-CNsjRHPU.js";import"./useButton-DDIuuTKh.js";import"./useTextField-oNIf8dly.js";import"./useControlledState-DY68Wkyd.js";import"./useField-DcjSv-D1.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CLvgkq8P.js";import"./Dialog-K8ntk6sz.js";import"./OverlayArrow-PEhFhM_P.js";import"./useResizeObserver-BIpoNcBC.js";import"./Collection-BmY9KKYW.js";import"./index-BZiaFPS2.js";import"./Separator-BOvZJ_dj.js";import"./SelectionManager-BeEB6CA7.js";import"./useEvent-DxBQLibX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFon-F_M.js";import"./useDescription-BGQ7yS04.js";import"./ListKeyboardDelegate-C8of9doW.js";import"./PressResponder-BFkxg2fB.js";import"./useLocalizedStringFormatter-7YQVF9yJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C3hBAu6W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRuyO-og.js";import"./x-DoaJGzfS.js";import"./createLucideIcon-Dvn_rsFU.js";import"./useLocalizedStringFormatter-BAA2MslF.js";import"./Heading-B-3IvVIv.js";import"./info-0yIu5wJK.js";import"./Popover-C8uroeFt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-OSQm7sxx.js";import"./DragAndDrop-Dv0p0SXs.js";import"./inertValue-DxJxCnXt.js";import"./useListState-BpjRkBHG.js";import"./Tag-CMSW5pxI.js";import"./useHighlightSelectionDescription-DhtHlPtZ.js";import"./useUpdateEffect-CahCd_pP.js";import"./useHasTabbableChild-D8P7SNam.js";import"./chevron-down-YieruzB8.js";import"./Button.module-Co5e5YHp.js";import"./check-D3PrX-he.js";import"./useToggleState-k7QcTJn8.js";import"./Virtualizer-CI1Biq9l.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
