import{j as e}from"./iframe-DJxIXxf2.js";import{$ as c}from"./Form-DQvhgMmm.js";import{G as d}from"./Grid-ZNKxZWgK.js";import{G as i}from"./GridItem-Crj5B6cq.js";import{a as x,R as u}from"./Radio-CHPJqg-T.js";import{C as I}from"./CheckboxGroup-CdToAnyo.js";import{C as G}from"./Checkbox-DtnERNeu.js";import{T as t}from"./TextField-DmohrDm3.js";import{S as l}from"./Select-OlKAPd2Z.js";import{L as p}from"./ListBoxItem-CW1wtg8U.js";import{B as a}from"./Button-YUjToJ3r.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_KlqI5i.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-IBNADZfB.js";import"./useFocusRing-COgDf2QV.js";import"./index-B08RvMtD.js";import"./index-QDuJYXlY.js";import"./clsx-Ciqy0D92.js";import"./Group-BmWaMflL.js";import"./FieldError-DYGSUEKV.js";import"./Text--wP8bLIY.js";import"./Text-fN96k5_K.js";import"./Button-CIL_abe4.js";import"./Hidden-DoMNzo3F.js";import"./useLabels-B8ZHiySF.js";import"./useButton-CDOgKioF.js";import"./SelectionIndicator-EFKob9mQ.js";import"./useField-BXl4tVWh.js";import"./VisuallyHidden-fBTKN9Mv.js";import"./useControlledState-C1p1aY8E.js";import"./Label-DFpaY83Q.js";import"./Dialog-BPh53Xc3.js";import"./RSPContexts-aF70D7kh.js";import"./OverlayArrow-C5bDCdxJ.js";import"./useResizeObserver-hUeUZzVF.js";import"./Collection-CNHbJK5e.js";import"./index-81brxfSB.js";import"./Separator-BTxwBYLq.js";import"./SelectionManager-BIKAQhZe.js";import"./useEvent-BKeRbScP.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-8DpELlxG.js";import"./ListKeyboardDelegate-8IRcIyPc.js";import"./PressResponder-_QMUbjdk.js";import"./useLocalizedStringFormatter-BJvVBtx8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bg2vaEFc.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bp5hmktp.js";import"./createLucideIcon-82x2wRy4.js";import"./useLocalizedStringFormatter-CBcMRp9p.js";import"./Heading-BIkBuKDH.js";import"./info-Ce6SdQZE.js";import"./Popover-r6lwygSk.js";import"./check-BYJLIVPI.js";import"./useToggleState-Dqgeb-8x.js";import"./TextFieldBase-BwF94Jng.js";import"./Input-r_OTHy9I.js";import"./useTextField-CqOvbwYV.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CkuFLdoD.js";import"./DragAndDrop-CQQRlFZS.js";import"./inertValue-C8Pcbneo.js";import"./useListState-B5YoYL6d.js";import"./TagGroup-CdO5cc1e.js";import"./useHighlightSelectionDescription-B7x6UOtX.js";import"./useUpdateEffect-DDmQtaMI.js";import"./useHasTabbableChild-C82KK3yR.js";import"./chevron-down-BSuhl-U6.js";import"./Virtualizer-CImDPzNI.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
