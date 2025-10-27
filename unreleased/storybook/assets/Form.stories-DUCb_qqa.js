import{j as n}from"./iframe-D7nKCOTo.js";import{$ as j}from"./Form-BddEHz26.js";import{G}from"./Grid-BRP-HcPi.js";import{G as e}from"./GridItem-B-JoCplZ.js";import{T as r}from"./TextField-BffPq_Dc.js";import{S as I}from"./Select-BgS9w_au.js";import{B as a}from"./Button-D2sEEbKy.js";import{R as g,a as b}from"./Radio-D_q4mXYz.js";import{C as h}from"./CheckboxGroup-BAtFRoN_.js";import{C as k}from"./Checkbox-5rWxKvYf.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-fSXIUWBv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-IDUb1C.js";import"./useFocusRing-C3JeAS6n.js";import"./index-CYljX00E.js";import"./index-B5uq69N5.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9fzznUc.js";import"./TextField-DxVF0UkC.js";import"./FieldError-av7Gr1ob.js";import"./Text-C1K1pw46.js";import"./Text-DOjOZnzh.js";import"./RSPContexts-DvS25vhu.js";import"./Group-CpvZlxdX.js";import"./Input-BDGsHkBz.js";import"./Hidden-7sHqVD0e.js";import"./Button-DsfXeq53.js";import"./useLabels-C089p53N.js";import"./useButton-BRKx7O9u.js";import"./useTextField-C3AfdfeR.js";import"./useControlledState-GJ9xN9Pl.js";import"./useField-DgT0CQMT.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BHBVEhii.js";import"./Dialog-D7wNakas.js";import"./OverlayArrow-COg6kZQp.js";import"./useResizeObserver-D4PMsH4d.js";import"./Collection-Dco18p1w.js";import"./index-6SDn0rn-.js";import"./Separator-Ch5-zzyR.js";import"./SelectionManager-Ddy0lgRr.js";import"./useEvent-CZ4Ex8Wm.js";import"./scrollIntoView-BpTTzPGd.js";import"./SelectionIndicator-C0tES--5.js";import"./useDescription-ITxTX1WW.js";import"./ListKeyboardDelegate-DaUFIfRX.js";import"./PressResponder-CvIbZWiP.js";import"./useLocalizedStringFormatter-JDishh1i.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CJjLErSu.js";import"./VisuallyHidden-H3d_6dJc.js";import"./useLocalizedStringFormatter-BGjRMC68.js";import"./x-iesSr9Zt.js";import"./createLucideIcon-BmrsJk-P.js";import"./Heading-C_89QLen.js";import"./info-aylyrZmz.js";import"./Popover-DyRWCfRO.js";import"./Tag-B5n99mKL.js";import"./ListBox-B-Hllo5u.js";import"./DragAndDrop-BcprLFan.js";import"./inertValue--v1WAkcw.js";import"./useListState-BDasX-xQ.js";import"./useHighlightSelectionDescription-DlYvYOND.js";import"./useUpdateEffect-DK-lV89k.js";import"./useHasTabbableChild-B4o0cEo6.js";import"./check-MVFaOboy.js";import"./ListBoxSection-C2qMlPe_.js";import"./Virtualizer-fBRQwpqd.js";import"./chevron-down-HEfLFRFA.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-KHbs0GSe.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
