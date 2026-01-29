import{j as e}from"./iframe-DFa3xMtH.js";import{$ as c}from"./Form-B9zhWkYb.js";import{G as d}from"./Grid-Z-wLYDIh.js";import{G as i}from"./GridItem-CECVvPyP.js";import{T as t}from"./TextField-7gaWXitd.js";import{S as l}from"./Select-ChG1_Up9.js";import{B as a}from"./Button-_PEtoZlZ.js";import{R as x,a as u}from"./Radio-DdBYqx8N.js";import{C as I}from"./CheckboxGroup-C9rX0afG.js";import{C as G}from"./Checkbox-CfzO9TyD.js";import{L as p}from"./ListBoxItem-Dd8aDkjC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BcZWRu-T.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZZHKzo3.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B6NDm1JZ.js";import"./TextField-BGKvPGb6.js";import"./FieldError-DDcEoLvd.js";import"./Text-BCIdAzOc.js";import"./Text-CLgVcmAF.js";import"./RSPContexts-DlObjR3U.js";import"./Group-Cb-h4LVU.js";import"./Input-BzReZ8h2.js";import"./Hidden-syp9xi-M.js";import"./Button-ocYHggw0.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./useTextField-BOpYqqyG.js";import"./useControlledState-DlMrxxrC.js";import"./useField-ClGbo0E5.js";import"./TextField.module-1fNSVGjT.js";import"./Label-B8lYr4O8.js";import"./Dialog-BxcM2ig8.js";import"./OverlayArrow-sxMCWPoz.js";import"./useResizeObserver-DY4A22tz.js";import"./Collection-BkC_HYu3.js";import"./index-C2EOBSzk.js";import"./Separator-DJQBe1ux.js";import"./SelectionManager-CTcSNJ1U.js";import"./useEvent-B4KRxCDO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BbaKMaGf.js";import"./useDescription-C-peboUL.js";import"./ListKeyboardDelegate--oOTktEO.js";import"./PressResponder-an9ltkUz.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1WugCT7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeIfbn57.js";import"./x-BuIg2Jvd.js";import"./createLucideIcon-CG_uvONP.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./Heading-Dr6x3va7.js";import"./info-CBLR6nAo.js";import"./Popover-BbApMzNe.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CObeAIqn.js";import"./DragAndDrop-p2ewM28K.js";import"./inertValue-DlB13Arw.js";import"./useListState-Cyk3BPVT.js";import"./Tag-CnWd2SSn.js";import"./useHighlightSelectionDescription-5ehX_Yu9.js";import"./useUpdateEffect-VOBWQqf8.js";import"./useHasTabbableChild-Dc8yKobQ.js";import"./chevron-down-BUdgiUN5.js";import"./Button.module-Co5e5YHp.js";import"./check-BcKmdbna.js";import"./useToggleState-CgZg35-q.js";import"./Virtualizer-CvGgyVAH.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
