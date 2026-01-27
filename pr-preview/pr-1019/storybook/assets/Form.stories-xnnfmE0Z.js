import{j as e}from"./iframe-BBOYsnjU.js";import{$ as c}from"./Form-CHLazgRg.js";import{G as d}from"./Grid-DW8Eapn7.js";import{G as i}from"./GridItem-CM6WKsmi.js";import{T as t}from"./TextField-DMjGGZhk.js";import{S as l}from"./Select-CMttShXf.js";import{B as a}from"./Button-CyQgtJ3P.js";import{R as x,a as u}from"./Radio-C4QGuxOR.js";import{C as I}from"./CheckboxGroup-DmjfJv9L.js";import{C as G}from"./Checkbox-DTzEyyaj.js";import{L as p}from"./ListBoxItem-DFx7eG3U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-j2mhf0J5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D48nmeiZ.js";import"./useFocusRing-DZUzyHgy.js";import"./index-rPoChojA.js";import"./index-Cf35xK9l.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C9DolLuS.js";import"./TextField-Ch_g2riw.js";import"./FieldError-DVSJgZFJ.js";import"./Text-CZBI6ZSH.js";import"./Text-DzOdr-51.js";import"./RSPContexts-D5OeRAAV.js";import"./Group-CsNRZL7D.js";import"./Input-BDf_KcUy.js";import"./Hidden-aOpMhQep.js";import"./Button-DDjB2733.js";import"./useLabels-DQMV1_Yc.js";import"./useButton-Ftv_ctu3.js";import"./useTextField-C0widOB9.js";import"./useControlledState-CQ0df-ju.js";import"./useField-LYyOQXPm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BedyMYE6.js";import"./Dialog-PT94pOVS.js";import"./OverlayArrow-DjxgQCPQ.js";import"./useResizeObserver-Crl3p5Sa.js";import"./Collection-CEBzJ_lA.js";import"./index-Dvfsc1lc.js";import"./Separator-B3e-1a45.js";import"./SelectionManager-BlVi-ftI.js";import"./useEvent-BilFL-U7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CusS6hE5.js";import"./useDescription-C0eI7hlZ.js";import"./ListKeyboardDelegate-BMqGOvXO.js";import"./PressResponder-D610_ohd.js";import"./useLocalizedStringFormatter-CDq5Lh88.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BllTI8pn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CPK8rn6e.js";import"./x-Dqyc0lO4.js";import"./createLucideIcon-Ce2Qhn1H.js";import"./useLocalizedStringFormatter-D1Kiw22P.js";import"./Heading-BGkTIoGQ.js";import"./info-BSgR4tHE.js";import"./Popover-Dl-LbO-l.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DFlsqQva.js";import"./DragAndDrop-Cf9WVW7t.js";import"./inertValue-ClsxHmnB.js";import"./useListState-DqYSUkHD.js";import"./Tag-Ddx0-hW4.js";import"./useHighlightSelectionDescription-CiTKN3Z9.js";import"./useUpdateEffect-BgSzQoT1.js";import"./useHasTabbableChild-DWXwVCfR.js";import"./chevron-down-DOhOkU2f.js";import"./Button.module-Co5e5YHp.js";import"./check-COwCm7m4.js";import"./useToggleState-D0fgWUNk.js";import"./Virtualizer-eYJ3oDkj.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
