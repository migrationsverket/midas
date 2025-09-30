import{j as n}from"./iframe-B8lneMeq.js";import{$ as j}from"./Form-BVmLlBpH.js";import{G}from"./Grid-BoJh3c2h.js";import{G as e}from"./GridItem-W--W4hy-.js";import{T as r}from"./TextField-tyMM4psl.js";import{S as I}from"./Select-aKtWW8md.js";import{B as a}from"./Button-DeIHVsUa.js";import{R as g,a as b}from"./Radio-qdM7dnnO.js";import{C as h}from"./CheckboxGroup-Cb--YIiz.js";import{C as k}from"./Checkbox-mOx-i3Qt.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C5evpkXB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DFxK5jc2.js";import"./useFocusRing-CDqWDoc4.js";import"./index-4Vfd46zx.js";import"./index-BeoiaLoD.js";import"./TextFieldBase-BGIvXd5P.js";import"./TextField-GKooY-lB.js";import"./FieldError-DcvWbgYU.js";import"./Text-C_5ry2cG.js";import"./Text-CbpineuD.js";import"./context-Cyqr9JJn.js";import"./SelectionManager-CTU_B9KK.js";import"./useEvent-DImuT7su.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-QkOBWzYh.js";import"./useDescription-1wd8PR9j.js";import"./useControlledState-cZIS4plk.js";import"./Group-CRZmAT0-.js";import"./Input-BMbZ9Td2.js";import"./Hidden-Be_JlbAv.js";import"./Button-CrmEsfFX.js";import"./useLabels-D4krVW4Z.js";import"./useButton-bd9rWnIl.js";import"./useTextField-BgKIrdnw.js";import"./useField-BYqof05M.js";import"./TextField.module-DjUItNl5.js";import"./Label-DVZp3-je.js";import"./Dialog-D_ylaDUX.js";import"./RSPContexts-41XcLKU3.js";import"./OverlayArrow-BhN0nn0-.js";import"./useResizeObserver-CDwTbrAv.js";import"./Collection-ecSTnFoU.js";import"./index-ccwLqPax.js";import"./Separator-BnMT5G1O.js";import"./PressResponder-DJB3XFBU.js";import"./useLocalizedStringFormatter-Dj-77w5Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BF8ELoCy.js";import"./useLocalizedStringFormatter-BOPm1UPu.js";import"./x-B9PaVkKg.js";import"./createLucideIcon-Df5LIiIg.js";import"./Heading-Vc9Il7jk.js";import"./info-CAms5MU2.js";import"./Popover-BfE3Spdl.js";import"./Tag-BX8dUGIs.js";import"./ListBox-D0Ffny2G.js";import"./DragAndDrop-CDhmcAzh.js";import"./inertValue-CZnKd62c.js";import"./useListState-BuK2yv-4.js";import"./useHighlightSelectionDescription-Cwm3BPTT.js";import"./useUpdateEffect-DDAmuIbE.js";import"./useHasTabbableChild-BCYVGT65.js";import"./check-reLQQgRd.js";import"./ListBoxSection-9XDV0Y37.js";import"./Virtualizer-c1OplIqh.js";import"./useObserveElement-DBGxygzE.js";import"./chevron-down-DfLcgReG.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DmOgvnEM.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
