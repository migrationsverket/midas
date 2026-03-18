import{j as e}from"./iframe-GrObhQyq.js";import{$ as c}from"./Form-CQVTLubV.js";import{G as d}from"./Grid-B0qM2R-X.js";import{G as i}from"./GridItem-LsjanTWd.js";import{a as x,R as u}from"./Radio-CmVhL65G.js";import{C as I}from"./CheckboxGroup-Dzfu91gl.js";import{C as G}from"./Checkbox-EEkqL1DT.js";import{T as t}from"./TextField-P9QIaRfn.js";import{S as l}from"./Select-d2Kp7ygi.js";import{L as p}from"./ListBoxItem-Bzb_-vNY.js";import{B as a}from"./Button-Cc5OvUjG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BcHOgQs3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BNKR3t-o.js";import"./useFocusRing-BFS8TNaT.js";import"./index-DEBi2S7D.js";import"./index-BYwjw4Yq.js";import"./clsx-Ciqy0D92.js";import"./Group-DqGT5YnY.js";import"./FieldError-BbmV2Vd2.js";import"./Text-DFdfdwaW.js";import"./Text-1Ne8nj-Z.js";import"./Button-DeYdHRuW.js";import"./Hidden-dbsNdN1V.js";import"./useLabels-D8BolPkJ.js";import"./useButton-DFs2mCFz.js";import"./SelectionIndicator-vByACUzS.js";import"./useField-Bjtci_Fy.js";import"./VisuallyHidden-CLjBotbO.js";import"./useControlledState-Dha0NZNW.js";import"./Label-BrKQFiVE.js";import"./Dialog-CqJXuV41.js";import"./RSPContexts-DVG4WgYz.js";import"./OverlayArrow-DyGxqWGt.js";import"./useResizeObserver-C-37RCsu.js";import"./Collection-DtaPM21-.js";import"./index-BaVYZYKy.js";import"./Separator-BSbtXd3g.js";import"./SelectionManager-y2J_myWn.js";import"./useEvent-Cv_3xPK7.js";import"./scrollIntoView-CtxTz0vA.js";import"./useDescription--BWWeftJ.js";import"./ListKeyboardDelegate-DLkccLYE.js";import"./PressResponder-CExxgSGa.js";import"./useLocalizedStringFormatter-Bn9Pd0zB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CsR8Hp83.js";import"./getScrollParent-aN5df5mj.js";import"./x-DctIqP8u.js";import"./createLucideIcon-CmYd0_U9.js";import"./useLocalizedStringFormatter-Cn3i1neC.js";import"./Heading-CzDS6V1R.js";import"./info-CXct2d6o.js";import"./Popover-DIuRm1ch.js";import"./check-Db3YmwSp.js";import"./useToggleState-BndUGm7c.js";import"./TextFieldBase-pOEj8kX9.js";import"./Input-D9-keF9s.js";import"./useTextField-BJ6xwTiM.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D7HRnyJe.js";import"./DragAndDrop-Be3OIXVR.js";import"./inertValue-D9HTDHtQ.js";import"./useListState-DhnbIrh8.js";import"./TagGroup-BmutISRG.js";import"./useHighlightSelectionDescription-DkKvOdQQ.js";import"./useUpdateEffect-BOJataCj.js";import"./useHasTabbableChild-DfdF8yV1.js";import"./chevron-down-C6ns23bO.js";import"./Virtualizer-vrImrKyO.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
