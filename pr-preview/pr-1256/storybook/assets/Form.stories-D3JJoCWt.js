import{j as e}from"./iframe-BjXy11IP.js";import{c}from"./Form-DuPSWePz.js";import{G as d}from"./Grid-SwCyKD25.js";import{G as i}from"./GridItem-BxQiOVc7.js";import{a as x,R as u}from"./Radio-BnJcbrk4.js";import{C as I}from"./CheckboxGroup-UKCt6EjD.js";import{C as G}from"./Checkbox-C0FazZCi.js";import{T as t}from"./TextField-Csk5nV8E.js";import{S as l}from"./Select-B79lYOtU.js";import{L as p}from"./ListBoxItem-D1VNEQOk.js";import{B as a}from"./Button-CaR7So5F.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D20u5I3y.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./clsx-Ciqy0D92.js";import"./Group-BOFuX5F4.js";import"./FieldError-Bj299096.js";import"./Text-DM8Ihy_8.js";import"./Text-CXAF5biH.js";import"./Button-CwQmoSQG.js";import"./Hidden-B_bNI1dK.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./SelectionIndicator-DnJhxFrg.js";import"./useField-C2clUNbs.js";import"./VisuallyHidden-B8YjGTUD.js";import"./useControlledState-BFdO-Aas.js";import"./Label-3Owq8FvS.js";import"./Dialog-B6fuA9-4.js";import"./RSPContexts-Dc6ISs8u.js";import"./OverlayArrow-Bo6JBAss.js";import"./useResizeObserver-nRmR3_D9.js";import"./Collection-Bmvuh_aD.js";import"./index-svh7ED_h.js";import"./Separator-CbpAxHaB.js";import"./SelectionManager-MUVk0-Jq.js";import"./useEvent-BvN2BQGn.js";import"./scrollIntoView-e8j4Q6hS.js";import"./useDescription-BaUF5NM6.js";import"./ListKeyboardDelegate-Dlc0U7io.js";import"./PressResponder-DoU1gB1A.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wH-jenxE.js";import"./getScrollParent-Cwho8gKu.js";import"./ModalOverlay-ki2j3uM5.js";import"./x-CBMTJOuE.js";import"./createLucideIcon-BrUYswYS.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Heading-BDcENu1i.js";import"./info-CVrM1csg.js";import"./Popover-BeI0kvvq.js";import"./check-BHRcK2Fr.js";import"./useToggleState-CVBbsaXY.js";import"./TextFieldBase-CL4LxfW4.js";import"./Input-CFw_curM.js";import"./useTextField-oCc11dAG.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-e5zxArkN.js";import"./DragAndDrop-CKDT693R.js";import"./inertValue-CEYups2G.js";import"./useListState-s2N-SQKH.js";import"./TagGroup-DZMr022-.js";import"./useHighlightSelectionDescription-Dm88k9Ab.js";import"./useUpdateEffect-BW6Qqz_F.js";import"./useHasTabbableChild-BEOMrY7U.js";import"./chevron-down-iLEhnpW5.js";import"./Virtualizer-Cm2zMFzb.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
