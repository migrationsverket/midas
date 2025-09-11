import{j as n}from"./iframe-BqcgbIvs.js";import{$ as j}from"./Form-B_mKjvme.js";import{G}from"./Grid-GfTeCqlg.js";import{G as e}from"./GridItem-BkOR0GtX.js";import{T as r}from"./TextField-BpUglXhf.js";import{S as I}from"./Select-DM4Tqe_V.js";import{B as a}from"./Button-CJOwL5by.js";import{R as g,a as b}from"./Radio-CB1XsHP0.js";import{C as h}from"./CheckboxGroup-B21THyj_.js";import{C as k}from"./Checkbox-D8okKwPa.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-vw47TUNX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B-UlwKhN.js";import"./useFocusRing-BZFSn7UO.js";import"./index-CzK4n1_i.js";import"./index-DZeGozp2.js";import"./TextFieldBase-0VT2o_5f.js";import"./TextField-DubfmP6D.js";import"./FieldError-duIPEf7B.js";import"./Text-CFtmWCsH.js";import"./Text-Di6COefV.js";import"./ListKeyboardDelegate-Bb75HkNQ.js";import"./SelectionManager-Bx_hzpd6.js";import"./useEvent-BeaONmI-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CjmrBQEK.js";import"./useDescription-C91GXwD7.js";import"./useControlledState-GhyNYFjO.js";import"./Group-BAQjycZD.js";import"./Input-_85F6ZOx.js";import"./Hidden-C0Kle59M.js";import"./Button-BcQ50CrH.js";import"./useLabels-CtKe8lfJ.js";import"./useButton-CZC8IsCh.js";import"./useTextField-COlq3GUo.js";import"./useField-DAI73ViP.js";import"./TextField.module-DjUItNl5.js";import"./Label-CAg7agDL.js";import"./Dialog-BNueos4z.js";import"./RSPContexts-BHyuF_8x.js";import"./OverlayArrow-BIfpwnkv.js";import"./useResizeObserver-LGC4u7vf.js";import"./Collection-Bqe26fsF.js";import"./index-BnCDojBr.js";import"./Separator-CDZ3VcTX.js";import"./PressResponder-H3c_n2kV.js";import"./useLocalizedStringFormatter-BNX8Le_D.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D7BVaxya.js";import"./Dialog-Cd9z0Dmd.js";import"./useLocalizedStringFormatter-DnT3_S8_.js";import"./x-B6gRsUCv.js";import"./createLucideIcon-BWp2hIXa.js";import"./Heading-qLHZShSr.js";import"./info-Du9nnpM4.js";import"./Tag-CJ-TilnV.js";import"./ListBox-DQJK5ZbQ.js";import"./DragAndDrop-B-VpL10c.js";import"./inertValue-BAMH9FwE.js";import"./useListState-DJsdswce.js";import"./useHighlightSelectionDescription-BajC7adn.js";import"./useUpdateEffect-CYoW8LwN.js";import"./useHasTabbableChild-CAw8AVR7.js";import"./check-BmOBwq8J.js";import"./ListBoxSection-BgqUhAM6.js";import"./Virtualizer-CirUYOC3.js";import"./useObserveElement-B0OdzzSD.js";import"./chevron-down-A2Y62WEN.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Tnxm_gXw.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
