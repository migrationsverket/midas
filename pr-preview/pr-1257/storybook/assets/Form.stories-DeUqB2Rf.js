import{j as e}from"./iframe-D_tI-LG6.js";import{c}from"./Form-CS_16PeS.js";import{G as d}from"./Grid-D2EZepGm.js";import{G as i}from"./GridItem-Ctq10b2f.js";import{a as x,R as u}from"./Radio-C7eOqMib.js";import{C as I}from"./CheckboxGroup-xSrvOshC.js";import{C as G}from"./Checkbox-5pDCZ6HI.js";import{T as t}from"./TextField-BeZkjP_X.js";import{S as l}from"./Select-CkBLYZH2.js";import{L as p}from"./ListBoxItem-C6THpR4_.js";import{B as a}from"./Button-GXHEwtjb.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DXI1PCCK.js";import"./utils-BmuT-4CL.js";import"./clsx-B-dksMZM.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./clsx-Ciqy0D92.js";import"./Group-D4TlFZLJ.js";import"./FieldError-CvwrOOlF.js";import"./Text-CULJXyXM.js";import"./Text-C08wpa18.js";import"./Button-hSHq5h1Q.js";import"./Hidden-D7jFD7Zq.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./SelectionIndicator-B_gIlSD6.js";import"./useField-kyr3UNB4.js";import"./VisuallyHidden-DzLaLv62.js";import"./useControlledState-D0L1s8oX.js";import"./Label-BQu2VcZX.js";import"./Dialog-eXPf3smd.js";import"./RSPContexts-C1Z7Vm5X.js";import"./OverlayArrow-BGTLKWnm.js";import"./useResizeObserver-BsODJpzd.js";import"./Collection-B7H5xaqM.js";import"./index-BH9s9hTH.js";import"./Separator-Da8IBImH.js";import"./SelectionManager-g-9xTfpe.js";import"./useEvent-BeOXJju6.js";import"./scrollIntoView-Bwch4vY3.js";import"./useDescription-T8zc5UX5.js";import"./ListKeyboardDelegate-D_cKU6vh.js";import"./PressResponder-TY9kKsKw.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMgKQrZS.js";import"./getScrollParent-BgKCMS-7.js";import"./ModalOverlay-DA3YGCTz.js";import"./x-QsPpT9iF.js";import"./createLucideIcon-Cjn_t3BL.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./Heading-DHTQxhhY.js";import"./info-bmcdp-s_.js";import"./Popover-xs5lyvhu.js";import"./check-0EX5xwFx.js";import"./useToggleState-Dqqiy3s8.js";import"./TextFieldBase-BxKhpMo9.js";import"./Input-BKFyFcr2.js";import"./useTextField-hLSUVIVT.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BcxWF41l.js";import"./DragAndDrop-n7p-jRJX.js";import"./inertValue-D8tmPgmL.js";import"./useListState-FiLVEEir.js";import"./TagGroup-DhMBwmee.js";import"./useHighlightSelectionDescription-9Tie2vim.js";import"./useUpdateEffect-DQ0Yok9k.js";import"./useHasTabbableChild-C1SXCPxw.js";import"./chevron-down-KvlCoJQ5.js";import"./Virtualizer-BFgl_u9f.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
