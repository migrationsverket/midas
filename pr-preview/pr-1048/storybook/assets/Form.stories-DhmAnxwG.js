import{j as e}from"./iframe-CMe2wz4D.js";import{$ as c}from"./Form-CsarTKga.js";import{G as d}from"./Grid-DlHcRe3t.js";import{G as i}from"./GridItem-DqT_IETA.js";import{a as x,R as u}from"./Radio-CGj6wEcs.js";import{C as I}from"./CheckboxGroup-Ct-YEWzw.js";import{C as G}from"./Checkbox-Bhil4Ngs.js";import{T as t}from"./TextField-C2DaB_hm.js";import{S as l}from"./Select-tgXy_AUG.js";import{L as p}from"./ListBoxItem-9b9gaKL2.js";import{B as a}from"./Button-CDQv5njw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJ_hucLj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Btd0Kabf.js";import"./useFocusRing-DN312JKd.js";import"./index-UTABmGgd.js";import"./index-DgLmdWsP.js";import"./clsx-Ciqy0D92.js";import"./Group-Co_LPMr-.js";import"./FieldError-CqK9CxSD.js";import"./Text-DbDESw7Z.js";import"./Text-C6IcTtvN.js";import"./Button-BuypZ7Sp.js";import"./Hidden-Cq5lhTG-.js";import"./number-DfkVkf0F.js";import"./useLabels-BVLipinj.js";import"./useButton-CdtNP3fm.js";import"./SelectionIndicator-DcYQgJau.js";import"./useField-B4tU80Yq.js";import"./VisuallyHidden-BaQWCrYN.js";import"./useControlledState-D13p9GBW.js";import"./Label-CtMoHr6Q.js";import"./Dialog-BCIJ8lwe.js";import"./RSPContexts-roL6tJu5.js";import"./OverlayArrow-D-Q2SzlG.js";import"./useResizeObserver-D5ureoru.js";import"./Collection-OdPW2hIZ.js";import"./index-C3DfPzTs.js";import"./Separator-CQ0RcBeP.js";import"./SelectionManager-D-1hvZxs.js";import"./useEvent-cUwG2woL.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-jTYbaPrg.js";import"./ListKeyboardDelegate-CVSZe2G2.js";import"./PressResponder-iJE139cV.js";import"./useLocalizedStringFormatter-jsgjsUy3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4BBbAxe.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-BUb7R24X.js";import"./x-BEfRANP2.js";import"./createLucideIcon-Bteudlm4.js";import"./useLocalizedStringFormatter-fpyssM3k.js";import"./Heading-_-Lcq5Ed.js";import"./info-DJYXbaP0.js";import"./Popover-BmXxTL_W.js";import"./check-COvI9_G8.js";import"./useToggleState-vdrqyYni.js";import"./TextFieldBase-viIS_sv5.js";import"./TextField-_iwzpuzs.js";import"./Input-Dkfg6AS8.js";import"./useTextField-iNeEMnQf.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BatLPsWr.js";import"./DragAndDrop-DJBSOJ3p.js";import"./inertValue-bWsti3V8.js";import"./useListState--hiMY_oV.js";import"./Tag-CP-pTbr7.js";import"./useHighlightSelectionDescription-DKZt5e2c.js";import"./useUpdateEffect-B1xkN5aE.js";import"./useHasTabbableChild-OSarYhmZ.js";import"./chevron-down-B4gKrkkB.js";import"./Virtualizer-C99h98fD.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
