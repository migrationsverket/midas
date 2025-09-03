import{j as n}from"./iframe-zn0VL0sU.js";import{$ as j}from"./Form-Csy67l0J.js";import{G}from"./Grid-BJA1lvRR.js";import{G as e}from"./GridItem-BwF6Diuk.js";import{T as r}from"./TextField-BO2IJI8P.js";import{S as I}from"./Select-DdR1xDXS.js";import{B as a}from"./Button-Dd8syc0N.js";import{R as g,a as b}from"./Radio-NRymjydB.js";import{C as h}from"./CheckboxGroup-CT4UGVw8.js";import{C as k}from"./Checkbox-CmY-S5p_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Z0munrbB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DRuJF80h.js";import"./useFocusRing-BEf3GzXe.js";import"./index-DsRhnFu7.js";import"./index-pUkg-FXt.js";import"./TextFieldBase-BS__2wbq.js";import"./TextField-DVkeObDn.js";import"./FieldError-C34VZ6gK.js";import"./Text-DhFYCR3E.js";import"./Text-D9Dj0aFN.js";import"./ListKeyboardDelegate-DkgVE9Mt.js";import"./SelectionManager-Cd4qb87i.js";import"./useEvent-DZzSzp04.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BiD9y4_b.js";import"./useDescription-DgRZkJhD.js";import"./useControlledState-BuBr_3Ea.js";import"./Group-BXBw8MVc.js";import"./Input-Det3EJhh.js";import"./Hidden-CbJpoxTt.js";import"./Button-CSRkMC6p.js";import"./useLabels-Czum_ED8.js";import"./useButton-BxUZHAjg.js";import"./useTextField-Dn3VJ1rV.js";import"./useField-BzQ7yg6w.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-Dy7S3__F.js";import"./Dialog-CYe_p0Zx.js";import"./RSPContexts-CCGSKdLJ.js";import"./OverlayArrow-ZAoZNeY9.js";import"./useResizeObserver-DLCPVxDO.js";import"./Collection-j35AljQ6.js";import"./index-HgcD08Tb.js";import"./Separator-BsKALp8S.js";import"./PressResponder-BYLopsNT.js";import"./useLocalizedStringFormatter-a-cme_Bt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-uozbX2Bi.js";import"./Dialog-DE3x1A1R.js";import"./useLocalizedStringFormatter-C6cZfUYS.js";import"./x-BYWjWwMx.js";import"./createLucideIcon-DLLIq0e2.js";import"./Heading-D2FTV_up.js";import"./info-Bn3DoQd1.js";import"./Tag-Cqube8Dr.js";import"./ListBox-DTPZJ-76.js";import"./DragAndDrop-DQLTjNtP.js";import"./inertValue-DA1SD_zz.js";import"./useListState-BaA3ZKyr.js";import"./useHighlightSelectionDescription-9seapCOQ.js";import"./useUpdateEffect-BLEuAAdE.js";import"./useHasTabbableChild-CYRr7l6f.js";import"./check-P4mtQ7Wo.js";import"./ListBoxSection-DPs-oxd1.js";import"./Virtualizer-CqnKLmXo.js";import"./useObserveElement-pH_tM8tr.js";import"./chevron-down-u88AHCyD.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-wp0TpnT_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
