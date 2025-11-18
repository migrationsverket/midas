import{j as e}from"./iframe-CRoNsbQO.js";import{$ as c}from"./Form-BEmGWFSp.js";import{G as d}from"./Grid-Dewy909T.js";import{G as i}from"./GridItem-WOxYscNd.js";import{T as t}from"./TextField-SDmxKKu7.js";import{S as l}from"./Select-Oqe1JZLu.js";import{B as a}from"./Button-DGaMX184.js";import{R as x,a as u}from"./Radio-BfbWNCqy.js";import{C as I}from"./CheckboxGroup-BuEnPWKC.js";import{C as G}from"./Checkbox-wWR64z7N.js";import{L as p}from"./ListBoxItem-BBZFzRVl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D0ifQBPW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bf5gX9Wk.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D3tkXivn.js";import"./TextField-DXWfElYF.js";import"./FieldError-Dj5cdKz5.js";import"./Text-CAsCU6A1.js";import"./Text-CrBpTqh-.js";import"./RSPContexts-kFSkNoSC.js";import"./Group-BIydHkEG.js";import"./Input-D4NBKfmt.js";import"./Hidden-B-LzNKej.js";import"./Button-km7jXYEC.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./useTextField-CLTb00Yl.js";import"./useControlledState-Dj6nb6WC.js";import"./useField-kdvN3WE1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-NtYVQWgr.js";import"./Dialog-BEM8XTz6.js";import"./OverlayArrow-ltrji9kN.js";import"./useResizeObserver-kQhUJ21Y.js";import"./Collection-D3dByBD3.js";import"./index-N3otLqmC.js";import"./Separator-DCbqwq0a.js";import"./SelectionManager-woNpDBbA.js";import"./useEvent-aJGP5zxw.js";import"./scrollIntoView-BrB1dIDm.js";import"./SelectionIndicator-DW40YJH5.js";import"./useDescription-D4n7GTlG.js";import"./ListKeyboardDelegate-C8YuRENt.js";import"./PressResponder-Blc0Fj-n.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsA_2YDI.js";import"./VisuallyHidden-BDiINJ_f.js";import"./useLocalizedStringFormatter-CXNQgKhO.js";import"./x-BOdTfTaA.js";import"./createLucideIcon-DIDS4uVQ.js";import"./Heading-BXuhk9-h.js";import"./info-CEk2Scvq.js";import"./Popover-CZGpUzdU.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-42KOxMyp.js";import"./DragAndDrop-CEpksYYU.js";import"./inertValue-CeKPLZXc.js";import"./useListState-BdIUGwX6.js";import"./Tag-Cmcfa4bZ.js";import"./useHighlightSelectionDescription-BZqMHOjA.js";import"./useUpdateEffect-ZCmthKkT.js";import"./useHasTabbableChild-DJo7qSaZ.js";import"./chevron-down-DzOWz8Ff.js";import"./Button.module-CtQ1deO8.js";import"./check-puNzWH8E.js";import"./useToggleState-CGD_lb13.js";import"./Virtualizer-B4PZESRY.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
