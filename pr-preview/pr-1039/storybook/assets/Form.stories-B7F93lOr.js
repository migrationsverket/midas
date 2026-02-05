import{j as e}from"./iframe-Zc8QEBEs.js";import{$ as c}from"./Form-DfY9cbLS.js";import{G as d}from"./Grid-B7A_CWUB.js";import{G as i}from"./GridItem-anFGSUWq.js";import{a as x,R as u}from"./Radio-CHslKifl.js";import{C as I}from"./CheckboxGroup-Bum8PhpB.js";import{C as G}from"./Checkbox-C55lLpIU.js";import{T as t}from"./TextField--YnPVZXC.js";import{S as l}from"./Select-CdHbQF38.js";import{L as p}from"./ListBoxItem-Dgeqvukp.js";import{B as a}from"./Button-Dkxo3GyP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B5Ft6r77.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bbgo3ES6.js";import"./useFocusRing-DVsvUXQz.js";import"./index-D1lEo7Ix.js";import"./index-CTsCTBIR.js";import"./clsx-Ciqy0D92.js";import"./Group-CKckRe83.js";import"./FieldError-RKqcL0cn.js";import"./Text-D3gJufSD.js";import"./Text-DJvoMdLY.js";import"./Button-CVF2QLQE.js";import"./Hidden-CwlmQhVF.js";import"./useLabels-B1tM-n7Q.js";import"./useButton-CeK3qSVj.js";import"./SelectionIndicator-Db61joGp.js";import"./useField-CvXnBGYy.js";import"./VisuallyHidden-DAd_ytwS.js";import"./useControlledState--JkDKSQL.js";import"./Label-BMEK7aOq.js";import"./Dialog-DhvD1and.js";import"./RSPContexts-D6ksqvWo.js";import"./OverlayArrow-DK_Hqowl.js";import"./useResizeObserver-BHwzkzeg.js";import"./Collection-DNsKHJEo.js";import"./index-BjRnP0Cx.js";import"./Separator-BawHnKHm.js";import"./SelectionManager-C89loMqR.js";import"./useEvent-sXQWxw0f.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bmj6vDCw.js";import"./ListKeyboardDelegate-ra7BEp36.js";import"./PressResponder-DqvWa8Dy.js";import"./useLocalizedStringFormatter-BktvRcda.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6Zd2BsO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DLzHvAkE.js";import"./createLucideIcon-BfbY4clK.js";import"./useLocalizedStringFormatter-Bj4PzUKr.js";import"./Heading-C0aUvMQS.js";import"./info-CCkJueSN.js";import"./Popover-CyWwcwZc.js";import"./check-DHxJ7m9P.js";import"./useToggleState-Z5C6-2Oh.js";import"./TextFieldBase-BV4lR-ui.js";import"./TextField-CxWd8tKU.js";import"./Input-DZ9uveSC.js";import"./useTextField-wdLBLz1l.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CcyPMzPY.js";import"./DragAndDrop-5WyXx-Ed.js";import"./inertValue-Cw1x3Ykz.js";import"./useListState-CNly7ADf.js";import"./Tag-BNr9YHFY.js";import"./useHighlightSelectionDescription-CQhRLHnB.js";import"./useUpdateEffect-DDV3umF5.js";import"./useHasTabbableChild-IFEBRMHV.js";import"./chevron-down-BCWDQBu9.js";import"./Virtualizer-Dxnll1id.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
