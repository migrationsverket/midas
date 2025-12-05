import{j as e}from"./iframe-BvU5xcZ6.js";import{$ as c}from"./Form-Cxrk7nZK.js";import{G as d}from"./Grid-Clnib7Sq.js";import{G as i}from"./GridItem-B9UmLyTg.js";import{T as t}from"./TextField-DktNBy_i.js";import{S as l}from"./Select-B2Vwb-fW.js";import{B as a}from"./Button-Cv7hnaWU.js";import{R as x,a as u}from"./Radio-DEf6iXJP.js";import{C as I}from"./CheckboxGroup-C6NXsywd.js";import{C as G}from"./Checkbox-5eTDTeDk.js";import{L as p}from"./ListBoxItem-Bbx-95lj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNv02rPu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ctrr6uo1.js";import"./useFocusRing-vZw9Dvay.js";import"./index-Bef40-aw.js";import"./index-Dc_kFy69.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D0bDFviA.js";import"./TextField-CuF66Rd1.js";import"./FieldError-C_jAntIO.js";import"./Text-DFigioyQ.js";import"./Text-evR5nmIf.js";import"./RSPContexts-BulTZf7c.js";import"./Group-DkPBRsKS.js";import"./Input-B7TGBhmZ.js";import"./Hidden-DHY5Q1Kt.js";import"./Button-C9_RYgB9.js";import"./useLabels-FmS0ggiN.js";import"./useButton-B8BiSZmd.js";import"./useTextField-BQVWPMZC.js";import"./useControlledState-PQZLqL14.js";import"./useField-CZofIzOp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-u7Hrvyub.js";import"./Dialog-DI6MPESB.js";import"./OverlayArrow-BZcVsILZ.js";import"./useResizeObserver-DWjM30zM.js";import"./Collection-Dl6go_YD.js";import"./index-YoBKxMt_.js";import"./Separator-B-zTWApR.js";import"./SelectionManager-DHcXwlU3.js";import"./useEvent-Bz8l31iO.js";import"./scrollIntoView-D3VgVWtP.js";import"./SelectionIndicator-Bx753wwo.js";import"./useDescription-BClDbhSX.js";import"./ListKeyboardDelegate-CWATdnNC.js";import"./PressResponder-DqvzWvwj.js";import"./useLocalizedStringFormatter-BKZa2vq4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7Iam-X6.js";import"./VisuallyHidden-C8Yn3KEk.js";import"./x-BY4HyOQa.js";import"./createLucideIcon-Bd04jM4n.js";import"./useLocalizedStringFormatter-B52eqB_B.js";import"./Heading-BC0J-Zc1.js";import"./info-BwUPf6_J.js";import"./Popover-D4m9w2Ry.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DYW7vUhw.js";import"./DragAndDrop-CnUYMriX.js";import"./inertValue-B64YqImu.js";import"./useListState-DiBgz8fI.js";import"./Tag-j6BUGMCo.js";import"./useHighlightSelectionDescription-DpEQpHJ7.js";import"./useUpdateEffect-Bp9VIFz5.js";import"./useHasTabbableChild-Dejld2Ll.js";import"./chevron-down-C7CgQUo5.js";import"./Button.module-Co5e5YHp.js";import"./check-BJo8QmGI.js";import"./useToggleState-Cymi7uKq.js";import"./Virtualizer-Cp_aCI3L.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
