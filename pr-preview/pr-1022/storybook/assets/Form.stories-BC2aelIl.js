import{j as e}from"./iframe-2JtjApPo.js";import{$ as c}from"./Form-DKceiC0m.js";import{G as d}from"./Grid-SYJLcBWF.js";import{G as i}from"./GridItem-BfPukOhW.js";import{a as x,R as u}from"./Radio-DFNOK7IF.js";import{C as I}from"./CheckboxGroup-C0YJ_6Dl.js";import{C as G}from"./Checkbox-D8Hc6Ejn.js";import{T as t}from"./TextField-DYYUVUhU.js";import{S as l}from"./Select-CTPPpYBO.js";import{L as p}from"./ListBoxItem-BSof6VQG.js";import{B as a}from"./Button-Cqjrp1pe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CzNHZNuR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BCYtaxsj.js";import"./useFocusRing-C0YicbWo.js";import"./index-CSBRpQP6.js";import"./index-BGdLG16e.js";import"./clsx-Ciqy0D92.js";import"./Group-BMPen0Hw.js";import"./FieldError-Dln1Os_1.js";import"./Text-DuXa3TNC.js";import"./Text-BSc0SvwI.js";import"./Button-ByCdtsdN.js";import"./Hidden-C9R9ag8Z.js";import"./useLabels-L4n1lfmV.js";import"./useButton-DQi2T4lG.js";import"./SelectionIndicator-gj1EUJNv.js";import"./useField-DBBpCUIY.js";import"./VisuallyHidden-BPqsl5RX.js";import"./useControlledState-Bc67AkWO.js";import"./Label-DgtDyFKu.js";import"./Dialog-CxggxWVD.js";import"./RSPContexts-CHZ5pSVJ.js";import"./OverlayArrow-h501cStw.js";import"./useResizeObserver-oqVDEmte.js";import"./Collection-qvAla_kv.js";import"./index-Bb5gds0q.js";import"./Separator-CbFxBL2h.js";import"./SelectionManager-9xpIiF7K.js";import"./useEvent-X2YyRtFg.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DTNf7b1X.js";import"./ListKeyboardDelegate-CG7ZMDhP.js";import"./PressResponder-BwJ2zlF9.js";import"./useLocalizedStringFormatter-DLo_dynU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CgKKh1MD.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BP08_jMZ.js";import"./createLucideIcon-DDjq8OkZ.js";import"./useLocalizedStringFormatter-Dm9cUQa8.js";import"./Heading-BTo5mNK0.js";import"./info--lQn1qxa.js";import"./Popover-DBPB6Mx-.js";import"./check-BN4gFO1S.js";import"./useToggleState-MjVQcxmt.js";import"./TextFieldBase-B2-8HcwU.js";import"./TextField-Bef-nu7u.js";import"./Input-DjXcGyJL.js";import"./useTextField-C4e7wbku.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BS6BEFei.js";import"./DragAndDrop--0Kl9sQK.js";import"./inertValue-DPFd6JxP.js";import"./useListState-C9sokD3c.js";import"./Tag-Bi3qao5n.js";import"./useHighlightSelectionDescription-e1VUgym2.js";import"./useUpdateEffect-BCFuFidE.js";import"./useHasTabbableChild-DZoxr5Oj.js";import"./chevron-down-WxsOYAB4.js";import"./Virtualizer-OhmZoMaS.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
