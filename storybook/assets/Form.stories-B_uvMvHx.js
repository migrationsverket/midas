import{j as e}from"./iframe-BWPy1RBq.js";import{c}from"./Form-DbQxgntm.js";import{G as d}from"./Grid-DuWbGuA9.js";import{G as i}from"./GridItem-B7K8LgLr.js";import{a as x,R as u}from"./Radio-Be1_vaXx.js";import{C as I}from"./CheckboxGroup-DEu75c3H.js";import{C as G}from"./Checkbox-B9ICRrXa.js";import{T as t}from"./TextField-DceYCPwm.js";import{S as l}from"./Select-DoQ-Pltb.js";import{L as p}from"./ListBoxItem-CXGC2zfr.js";import{B as a}from"./Button-DrPZXGaG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-RbbtUgdg.js";import"./utils-K3-6RYqB.js";import"./clsx-B-dksMZM.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./clsx-Ciqy0D92.js";import"./Group-FvQbGEnE.js";import"./FieldError-Cz5zi-ZF.js";import"./Text-Cia4oSWl.js";import"./Text-NU9ujCYW.js";import"./Button-CpSzsQmu.js";import"./Hidden-Tw89Zkrb.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./SelectionIndicator-CSEVtPet.js";import"./useField-CUHsbM6E.js";import"./VisuallyHidden-Bglg35TW.js";import"./useControlledState-D92tKPK_.js";import"./Label-D7QmrN_D.js";import"./Dialog-CIUqtcL0.js";import"./RSPContexts-nAVSp4dG.js";import"./OverlayArrow-BO4KWVXd.js";import"./useResizeObserver-g8GOm3Mq.js";import"./Collection-BNyZ9c9Q.js";import"./index-h_8LGHd6.js";import"./Separator-7AMSuRjK.js";import"./SelectionManager-DwZVDrXj.js";import"./useEvent-BFfcpkt9.js";import"./scrollIntoView-BPThSa08.js";import"./useDescription-DKa3yvbb.js";import"./ListKeyboardDelegate-DEEdN1cX.js";import"./PressResponder-BlIcO9FE.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qiytIb7X.js";import"./getScrollParent-Bz2Jpk0G.js";import"./x-28n2c5kv.js";import"./createLucideIcon-B4kCR5jG.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Heading-CimGNnkR.js";import"./info-NbLkrYYQ.js";import"./Popover-C1PtYzxv.js";import"./check-BKFznksD.js";import"./useToggleState-jeQBOVoK.js";import"./TextFieldBase-D4huBM5I.js";import"./Input-HeYl3kzw.js";import"./useTextField-Dls8T7AD.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cb3h3x-x.js";import"./DragAndDrop-SNHBtXaN.js";import"./inertValue-1NFwY83g.js";import"./useListState-Dqb6BVrc.js";import"./TagGroup-D57bgu8T.js";import"./useHighlightSelectionDescription-8rbKr_zu.js";import"./useUpdateEffect-DGnIDERi.js";import"./useHasTabbableChild-BfWIPyJa.js";import"./chevron-down-5vtKWatz.js";import"./Virtualizer-unIu_Htp.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
