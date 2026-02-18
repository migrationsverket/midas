import{j as e}from"./iframe-Bt2IPdm_.js";import{$ as c}from"./Form-C_E-_4AJ.js";import{G as d}from"./Grid-HiW1ZXWt.js";import{G as i}from"./GridItem-xJ8VFn7F.js";import{a as x,R as u}from"./Radio-B5OK3KFY.js";import{C as I}from"./CheckboxGroup-MFzFjI7l.js";import{C as G}from"./Checkbox-DGEb-Nzu.js";import{T as t}from"./TextField-BYhKG6Ij.js";import{S as l}from"./Select-b2clEdF6.js";import{L as p}from"./ListBoxItem-_5ojYbN_.js";import{B as a}from"./Button-CLF5zjXA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C3T3ztzp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-EZHxDImy.js";import"./useFocusRing-DkE8kJUj.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./clsx-Ciqy0D92.js";import"./Group-DYCuWu7i.js";import"./FieldError-DsVwS6sU.js";import"./Text-4gkk9B6S.js";import"./Text-sG9oy4ZT.js";import"./Button-C79FTkxg.js";import"./Hidden--XR3ujDb.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./SelectionIndicator-DJI9OpIi.js";import"./useField-CQxFKP7h.js";import"./VisuallyHidden-B4zsPLSx.js";import"./useControlledState-CHQWAa9G.js";import"./Label-CVH1jf-x.js";import"./Dialog-B0PJn95G.js";import"./RSPContexts-D7GX16CF.js";import"./OverlayArrow-5ddhla-X.js";import"./useResizeObserver-BcS0osVM.js";import"./Collection-IHp_di3t.js";import"./index-yOO_3eVZ.js";import"./Separator-DqcgbAKb.js";import"./SelectionManager-CnZMajYP.js";import"./useEvent-DjOTsNLO.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-COVCGZbr.js";import"./ListKeyboardDelegate-CK6HBViI.js";import"./PressResponder-BaEex6DO.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0ebx63S.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BDjWDO9M.js";import"./createLucideIcon-CLpn3Yea.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";import"./Heading-DvDOH9KM.js";import"./info-DOfKscFP.js";import"./Popover-BfGWYSLO.js";import"./check-C2NMiBIm.js";import"./useToggleState-CAhxU4d5.js";import"./TextFieldBase-DQAw2xM6.js";import"./Input-C91JHm11.js";import"./useTextField-ckkBpHVX.js";import"./TextField.module-CVrvGgqI.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BpEKY4os.js";import"./DragAndDrop-LbCCi2Sz.js";import"./inertValue-CJCAIwZn.js";import"./useListState-gcIjcmXp.js";import"./TagGroup-DplosBuw.js";import"./useHighlightSelectionDescription-BNy_NIf-.js";import"./useUpdateEffect-D0IKf29K.js";import"./useHasTabbableChild-DU1IekZf.js";import"./chevron-down-BR7eBkbV.js";import"./Virtualizer-C7JX9eJs.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
