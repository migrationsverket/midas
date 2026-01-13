import{j as e}from"./iframe-CLw9EvUn.js";import{$ as c}from"./Form-9GI7TNth.js";import{G as d}from"./Grid-DhaJHrEE.js";import{G as i}from"./GridItem-DmmQcsXE.js";import{T as t}from"./TextField-_gKs9ewb.js";import{S as l}from"./Select-BJB9Sb6R.js";import{B as a}from"./Button-Cl5UNsPK.js";import{R as x,a as u}from"./Radio-Df1KkRaH.js";import{C as I}from"./CheckboxGroup-upBIszrp.js";import{C as G}from"./Checkbox-DibntsVD.js";import{L as p}from"./ListBoxItem-B48cthnE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BwWAyVJP.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CBNA-ySD.js";import"./useFocusRing-BAEYXSj_.js";import"./index-Bq3XAPPV.js";import"./index-B5Glj1Lw.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DLseEuGk.js";import"./TextField-D0-BVOob.js";import"./FieldError-Cd3lwIs8.js";import"./Text-D5JOCqJj.js";import"./Text-1Buqt0Vq.js";import"./RSPContexts-gaT2a0FT.js";import"./Group-5NCVb9_0.js";import"./Input-rREs_Pl5.js";import"./Hidden-D77l1g2T.js";import"./Button-DnmoB4JS.js";import"./useLabels-D1N2DW3Q.js";import"./useButton-DCV5HdO0.js";import"./useTextField-BDwKuana.js";import"./useControlledState-D21u0Iei.js";import"./useField-CSdrZpk2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1TaqGRr.js";import"./Dialog-Grj0HpwQ.js";import"./OverlayArrow-0hbTPMux.js";import"./useResizeObserver-BmwkevNe.js";import"./Collection-BjtU8r22.js";import"./index-BZeZUtRN.js";import"./Separator-BqieKLmm.js";import"./SelectionManager-J4SnEKPG.js";import"./useEvent-BPW_XcXk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPee6rBv.js";import"./useDescription-D3QViYKP.js";import"./ListKeyboardDelegate-DUusS8cO.js";import"./PressResponder-yCoQbp4v.js";import"./useLocalizedStringFormatter-tJnjIpft.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DrixOR4s.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CbcleJY8.js";import"./x-D1N4eJz6.js";import"./createLucideIcon-KVsuRhiu.js";import"./useLocalizedStringFormatter-B24pFSF-.js";import"./Heading-DHqaN_SF.js";import"./info-DkgmhN9o.js";import"./Popover-BcgK22rF.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D3Vu0mSg.js";import"./DragAndDrop-Cu8ksEZY.js";import"./inertValue-C_5nKpGb.js";import"./useListState-DzZx8jKI.js";import"./Tag-DOJsxUN5.js";import"./useHighlightSelectionDescription-DSr9ZD-Q.js";import"./useUpdateEffect-BoNG3IUV.js";import"./useHasTabbableChild-qU-LccvR.js";import"./chevron-down-2vQYJqo5.js";import"./Button.module-Co5e5YHp.js";import"./check-1cgiYmqG.js";import"./useToggleState-B7zeFUKK.js";import"./Virtualizer-C6ZIbZS1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
