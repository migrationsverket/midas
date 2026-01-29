import{j as e}from"./iframe-CTvpKBSK.js";import{$ as c}from"./Form-mfwEhoNh.js";import{G as d}from"./Grid-BLbezec9.js";import{G as i}from"./GridItem-DF8SZdeC.js";import{T as t}from"./TextField-Cki8EVHu.js";import{S as l}from"./Select-C1Y8ACn5.js";import{B as a}from"./Button-BtfMoIh9.js";import{R as x,a as u}from"./Radio-2Nj8dC7f.js";import{C as I}from"./CheckboxGroup-D8deWAtb.js";import{C as G}from"./Checkbox-NVYJxCr8.js";import{L as p}from"./ListBoxItem-7CK_Mfed.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BiLGnBBz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Chpv9In5.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DhjH_r_V.js";import"./TextField-Cv_u4t3Y.js";import"./FieldError-BquSn9wl.js";import"./Text-DjtetnZp.js";import"./Text-BI68LSzD.js";import"./RSPContexts-fL8CzLzf.js";import"./Group-CiNAFLAE.js";import"./Input-BQp4Wd8o.js";import"./Hidden-DgXsqmZh.js";import"./Button-u0YKTc5k.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./useTextField-D2Jr83z3.js";import"./useControlledState-66bebSHu.js";import"./useField-BCLlGOHG.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DUbRtYDf.js";import"./Dialog-sxwGEQjR.js";import"./OverlayArrow-BFQFikzb.js";import"./useResizeObserver-dXzsevFb.js";import"./Collection-DJV5p488.js";import"./index-C-5LL5qr.js";import"./Separator-C3RxJYod.js";import"./SelectionManager-CPlVMwPw.js";import"./useEvent-6UK5uY3G.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8uATEmda.js";import"./useDescription-C76Kc7TT.js";import"./ListKeyboardDelegate-C-lNPHxi.js";import"./PressResponder-BRZ89O2D.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcJkVBJ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1c0ClIs.js";import"./x-CfmXATlG.js";import"./createLucideIcon-BvYu-wbL.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./Heading-DQH8WAtT.js";import"./info-uV8rRHDT.js";import"./Popover-Dx--U7UT.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DMJ97d_2.js";import"./DragAndDrop-Dus2JLj_.js";import"./inertValue-Bz2tQ2hm.js";import"./useListState-Ctp9_d6O.js";import"./Tag-CFcn9oxJ.js";import"./useHighlightSelectionDescription-Bsm49Mv-.js";import"./useUpdateEffect-Dy4sE4Ea.js";import"./useHasTabbableChild-mSa-SvUa.js";import"./chevron-down-Cz4z8QHl.js";import"./Button.module-Co5e5YHp.js";import"./check-ldM4tW1_.js";import"./useToggleState-D7YYJc2E.js";import"./Virtualizer-9fhGYu74.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
