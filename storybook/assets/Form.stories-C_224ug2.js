import{j as e}from"./iframe-D6ADc9_c.js";import{$ as c}from"./Form-DN_MDLWN.js";import{G as d}from"./Grid-uua7fWyN.js";import{G as i}from"./GridItem-CV5BTaaP.js";import{a as x,R as u}from"./Radio-DHKlos0p.js";import{C as I}from"./CheckboxGroup-BavmvZtH.js";import{C as G}from"./Checkbox-DHxiHUzN.js";import{T as t}from"./TextField-BrL6tLI2.js";import{S as l}from"./Select-DOmHPo4h.js";import{L as p}from"./ListBoxItem-Bp4Qilkn.js";import{B as a}from"./Button-CIEzI-V7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Co-WyaVB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BRorHZ80.js";import"./useFocusRing-QJf4MrA-.js";import"./index-D1aif8GU.js";import"./index-Ctq9vtSb.js";import"./clsx-Ciqy0D92.js";import"./Group-BZ36xxak.js";import"./FieldError-DfqU_xU4.js";import"./Text-Uw6K1FwN.js";import"./Text-Cpi5Nlnk.js";import"./Button-BD1tt09E.js";import"./Hidden-BAUwWGh2.js";import"./useLabels-BSs_hlue.js";import"./useButton-RmGmQnEE.js";import"./SelectionIndicator-zfcXVD4I.js";import"./useField-DhT5MPzX.js";import"./VisuallyHidden-CBsbYA_W.js";import"./useControlledState-CEf-u91N.js";import"./Label-DdKVhDr8.js";import"./Dialog-DrsU59Bj.js";import"./RSPContexts-CeqDtQgt.js";import"./OverlayArrow-BVnYCVZu.js";import"./useResizeObserver-RQnHnL5i.js";import"./Collection-DYRtxejX.js";import"./index-Dt_fZTmi.js";import"./Separator-63iumiBg.js";import"./SelectionManager-BRVSpNSw.js";import"./useEvent-CyxeHTbo.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-3hQMCdT7.js";import"./ListKeyboardDelegate-CB_Qp04D.js";import"./PressResponder-DKjG_hpq.js";import"./useLocalizedStringFormatter-BzbrAoH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmNGN7CG.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-5V4xGIcw.js";import"./createLucideIcon-D0OOsTjF.js";import"./useLocalizedStringFormatter-CTSyD4LW.js";import"./Heading-aqQpVgYi.js";import"./info-D2ATOYqN.js";import"./Popover-DXBqsnMf.js";import"./check-P6HwLFPb.js";import"./useToggleState-Cg58Vg1m.js";import"./TextFieldBase-BH6ea1yr.js";import"./TextField-Bv0TFicT.js";import"./Input-CjgFuf-r.js";import"./useTextField-DRJk2b6v.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-bRaUueJf.js";import"./DragAndDrop-jEcQvqmL.js";import"./inertValue-C47t78Zy.js";import"./useListState-B0Lfw6dx.js";import"./Tag-CqJNdctG.js";import"./useHighlightSelectionDescription-BOoa6prP.js";import"./useUpdateEffect-DjAKDv4V.js";import"./useHasTabbableChild-Br-tlY1B.js";import"./chevron-down-CGASPm2-.js";import"./Virtualizer-DzMfCTza.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
