import{j as e}from"./iframe-BhyhdtXP.js";import{$ as c}from"./Form-it9E688f.js";import{G as d}from"./Grid-lgowEd_y.js";import{G as i}from"./GridItem-CqeLvfAA.js";import{T as t}from"./TextField-Cr2ssccr.js";import{S as l}from"./Select-BmR6YTjs.js";import{B as a}from"./Button-RHoYggw3.js";import{R as x,a as u}from"./Radio-DIRPSh5R.js";import{C as I}from"./CheckboxGroup-w1GBnKrx.js";import{C as G}from"./Checkbox-CW0uTy6F.js";import{L as p}from"./ListBoxItem-BWhBFxGP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CGWlpFgY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DmOBSjg0.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-iedFNQT4.js";import"./TextField-DqIkEmeY.js";import"./FieldError-DCeVhp7S.js";import"./Text-B-Mbjzpq.js";import"./Text-jDKA3oAD.js";import"./RSPContexts-pAilTGuB.js";import"./Group-DkJQMO8S.js";import"./Input-DAjBkyD1.js";import"./Hidden-BdJ24Yzp.js";import"./Button-C9H7bBoo.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./useTextField-0yybQNTL.js";import"./useControlledState-Dx8jPu5Z.js";import"./useField-CaiZwujr.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BqI3nq1y.js";import"./Dialog-CV6iNIfu.js";import"./OverlayArrow-CMwHKIIc.js";import"./useResizeObserver-DuZstJT9.js";import"./Collection-etEs1dki.js";import"./index-BWr0QrxI.js";import"./Separator-B-IRNIGq.js";import"./SelectionManager-cqG52ld-.js";import"./useEvent-lYhLdKrQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQlPeLkE.js";import"./useDescription-Dr1wl7PX.js";import"./ListKeyboardDelegate-BuCzJAIh.js";import"./PressResponder-TXqZCWpy.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUEPhhmF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C-jWiPOY.js";import"./x-D8pCTRyw.js";import"./createLucideIcon-Cz3c_aCr.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./Heading-aEQ5rkp1.js";import"./info-C3XlKCQB.js";import"./Popover-iQGdPM8P.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CMh1QZng.js";import"./DragAndDrop-Bi5MlR6D.js";import"./inertValue-ldhtgSKC.js";import"./useListState-BwLXPF7-.js";import"./Tag-iCKC9zdh.js";import"./useHighlightSelectionDescription-DF73Njng.js";import"./useUpdateEffect-ofMRLXa5.js";import"./useHasTabbableChild-BV7xiQO7.js";import"./chevron-down-TQdOBMcr.js";import"./Button.module-Co5e5YHp.js";import"./check-xqIrTCLK.js";import"./useToggleState-CGYuykgO.js";import"./Virtualizer-7mlyCMeh.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
